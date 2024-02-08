import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

interface PerformanceData {
  id: string;
  name: string;
  img: string;
  start: string;
  end: string;
  place: string;
  genre: string;
  rank: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const kopis_key = process.env.KOPIS_KEY;
  try {
    const response = await axios.get<string>(
      `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${kopis_key}&stdate=20160101&eddate=20241231&cpage=1&rows=100&prfstate=02&signgucode=11&signgucodesub=1111&kidstate=Y&newsql=Y`
    );
    const xmlData = response.data;

    parseString(xmlData, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "failed to parse XML" });
      }
      const jsonData: PerformanceData[] = result.dbs.db.map((item: any) => ({
        id: item.mt20id[0],
        name: item.prfnm[0],
        img: item.poster[0],
        start: item.prfpdfrom[0],
        end: item.prfpdto[0],
        place: item.fcltynm[0],
        genre: item.genrenm[0],
        rank: item.prfstate[0],
      }));
      if (!jsonData) {
        return res.status(500).json({ error: "data format error" });
      }

      const sortedData = jsonData.sort(
        (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
      );
      const paginatedData = sortedData.slice(0, 8);
      return res.status(200).json(paginatedData);
    });
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "internal server error" });
  }
}
