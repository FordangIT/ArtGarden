import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const kopis_key = process.env.KOPIS_KEY;
  const { id } = req.query;
  try {
    const response = await axios.get(
      `http://www.kopis.or.kr/openApi/restful/pblprfr/${id}?service=${kopis_key}&newsql=Y`
    );
    const xmlData = response.data;

    const data = await new Promise((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        const parsedData = result.dbs.db.map((item) => ({
          id: item.mt20id?.[0],
          name: item.prfnm?.[0],
          img: item.poster?.[0],
          start: item.prfpdfrom?.[0],
          end: item.prfpdto?.[0],
          place: item.fcltynm?.[0],
          genre: item.genrenm?.[0],
          state: item.prfstate?.[0],
          cast: item.fcltynm?.[0],
          crew: item.pcfcrew?.[0],
          runtime: item.prfruntime?.[0],
          age: item.prfage?.[0],
          price: item.pcseguidance?.[0],
          story: item.sty?.[0],
          styurls: item.styurls?.[0].styurl,
        }));
        resolve(parsedData);
      });
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "internal server error" });
  }
}
