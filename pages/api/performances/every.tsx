import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseStringPromise } from "xml2js";

interface Performance {
  id: string;
  img: string;
  name: string;
  start: string;
  end: string;
  place: string;
  genre: string;
  state: string;
}

interface Data {
  page: number;
  results: Performance[];
  total_pages: number;
  total_results: number;
}

interface PageData {
  pageParams: number[];
  pages: Data[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const kopis_key = process.env.NEXT_PUBLIC_KOPIS_KEY;

  try {
    const response = await axios.get(
      `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${kopis_key}&stdate=20160101&eddate=20241231&rows=100&cpage=1&prfstate=02`
    );

    if (response.status !== 200) {
      throw new Error(
        `Kopis API request failed with status code: ${response.status}`
      );
    }

    const xmlData = response.data;
    const parsedData = await parseXmlData(xmlData);

    res.status(200).json({ data: parsedData });
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).json({ error: "internal server error" });
  }
}

async function parseXmlData(xmlData: string) {
  const result = await parseStringPromise(xmlData);
  const db = result.dbs.db;

  const parsedData = db.map((item: any) => ({
    id: item.mt20id[0],
    name: item.prfnm[0],
    img: item.poster[0],
    start: item.prfpdfrom[0],
    end: item.prfpdto[0],
    place: item.fcltynm[0],
    genre: item.genrenm[0],
    state: item.prfstate[0],
  }));

  const chunkedData = chunkArray(parsedData, 10);
  const pages = chunkedData.map((chunk, index) => ({
    page: index + 1,
    results: chunk,
    total_pages: 10,
    total_results: 100,
  }));

  return {
    pageParams: Array.from({ length: chunkedData.length }, (_, i) => i + 1),
    pages,
  };
}

function chunkArray(array: any[], size: number) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}
