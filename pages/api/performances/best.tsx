import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

interface BestProducts {
  id?: string;
  name?: string;
  posterurl?: string;
  startdate?: string;
  enddate?: string;
  area?: string;
  genre?: string;
  count?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response = await axios.get<string>(
      `${process.env.KOPIS_URL}/boxoffice?service=${process.env.KOPIS_KEY}&ststype=week&date=20240601`
    );
    const xmlData = response.data;
    parseString(xmlData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "failed to parse XML" });
      }
      const jsonData: BestProducts[] = result.boxofs?.boxof?.map(
        (item: any) => {
          const dateRange = item.prfpd?.[0] || "";
          const [startdate, enddate] = dateRange
            .split("~")
            .map((date: string) => date.trim().replace(/\./g, "-"));
          return {
            id: item.mt20id?.[0],
            name: item.prfnm?.[0],
            posterurl: "http://www.kopis.or.kr" + item.poster?.[0],
            startdate,
            enddate,
            area: item.area?.[0],
            genre: item.cate?.[0],
            count: item.prfdtcnt?.[0]
          };
        }
      );
      if (!jsonData) {
        return res.status(500).json({ error: "data format error" });
      }

      const paginatedData = jsonData.slice(0, 9);
      return res.status(200).json(paginatedData);
    });
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "internal server error" });
  }
}
