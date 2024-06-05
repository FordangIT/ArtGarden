import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";
interface NewProducts {
  id: number;
  posterurl: string;
  name: string;
  place: string;
  startdate: string;
  enddate: string;
  genre: string;
  status: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response = await axios.get<string>(
      `${process.env.KOPIS_URL}/pblprfr?service=${process.env.KOPIS_KEY}&stdate=20240520&eddate=20240601&rows=9&cpage=1&newsql=Y`
    );

    const xmlData = response.data;
    parseString(xmlData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "failed to parse XML" });
      }
      const jsonData: NewProducts[] = result.dbs.db.map((item: any) => ({
        id: item.mt20id?.[0],
        posterurl: item.poster?.[0],
        name: item.prfnm?.[0],
        place: item.fcltynm?.[0],
        startdate: item.prfpdfrom?.[0],
        enddate: item.prfpdto?.[0],
        genre: item.genrenm?.[0],
        status: item.prfstate?.[0]
      }));
      if (!jsonData) {
        return res.status(500).json({ error: "data format error" });
      }
      return res.status(200).json(jsonData);
    });
  } catch (error) {
    console.error("error:", error); // API 요청에 대한 오류 처리
    res.status(500).json({ error: "internal server error" });
  }
}
