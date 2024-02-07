import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const kopis_key = process.env.KOPIS_KEY;
  try {
    const response = await axios.get(
      `http://kopis.or.kr/openApi/restful/boxoffice?service=${kopis_key}&ststype=week&date=20240121`
    );
    const xmlData = response.data;
    parseString(xmlData, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "failed to parse XML" });
      }
      const jsonData = result.boxofs?.boxof?.map((item) => ({
        id: item.mt20id?.[0],
        name: item.prfnm?.[0],
        img: "http://www.kopis.or.kr" + item.poster?.[0],
        date: item.prfpd?.[0],
        place: item.area?.[0],
        genre: item.cate?.[0],
        count: item.prfdtcnt?.[0],
      }));
      if (!jsonData) {
        return res.status(500).json({ error: "data format error" });
      }

      const paginatedData = jsonData.slice(0, 8);
      return res.status(200).json(paginatedData);
    });
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "internal server error" });
  }
}
