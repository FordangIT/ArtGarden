import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";
//전체 공연 정보 가져오는 데이터
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const kopis_key = process.env.KOPIS_KEY;
  const { cpage } = req.query;

  // const productsPerPage = 10; //페이지당 제품 수
  // const startIndex = Number(page) * productsPerPage;
  // const endIndex = startIndex + productsPerPage;

  try {
    const response = await axios.get(
      `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${kopis_key}&stdate=20160101&eddate=20241231&rows=12&cpage=${cpage}&prfstate=02`
    );
    const xmlData = response.data;

    const data = await new Promise((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        const parsedData = result.dbs.db.map((item) => ({
          id: item.mt20id[0],
          name: item.prfnm[0],
          img: item.poster[0],
          start: item.prfpdfrom[0],
          end: item.prfpdto[0],
          place: item.fcltynm[0],
          genre: item.genrenm[0],
          state: item.prfstate[0],
        }));
        resolve(parsedData);
      });
    });
    // const currentProducts = data.slice(startIndex, endIndex);
    res.status(200).json({ data });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "internal server error" });
  }
}
