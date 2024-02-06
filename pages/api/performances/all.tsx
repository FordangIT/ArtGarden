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
      `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${kopis_key}&stdate=20160101&eddate=20241231&cpage=1&rows=100&prfstate=02&signgucode=11&signgucodesub=1111&kidstate=Y&newsql=Y`
    );
    const xmlData = response.data;

    parseString(xmlData, (err, result) => {
      if (err) {
        throw err;
      }
      const data = result.dbs.db.map((item) => ({
        id: item.mt20id[0],
        name: item.prfnm[0],
        img: item.poster[0],
        end: item.prfpdto[0],
        place: item.fcltynm[0],
        genre: item.genrenm[0],
        rank: item.prfstate[0],
      }));
      res.status(200).json(data);
    });
    // const sortBy = req.query.sortBy;
    // if (sortBy === "latest") {
    //   data.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
    // } else if (sortBy === "best") {
    //   data.sort((a, b) => b.rank - a.rank);
    // }
    // const processedData = data.map((item: any) => ({
    //   id: item.mt20id,
    //   name: item.prfnm,
    //   img: item.poster,
    //   end: item.prfpdto,
    //   // price: item.price,
    //   place: item.area,
    //   genre: item.genrenm,
    //   rank: item.prfstate,
    // }));
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "internal server error" });
  }
}
