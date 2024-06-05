import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

// 공연 ID를 받아 상세 정보를 가져오는 함수
const fetchDetails = async (id: string) => {
  try {
    const res = await axios.get<string>(
      `${process.env.KOPIS_URL}/pblprfr/${id}?service=${process.env.KOPIS_KEY}&newsql=Y`
    );
    const xmlData = res.data;

    // XML 데이터를 JSON으로 변환
    const jsonData = await new Promise((resolve, reject) => {
      parseString(xmlData, { explicitArray: false }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const item = result.dbs.db;
          const performance = {
            id: item.mt20id,
            img: item.poster,
            name: item.prfnm,
            place: item.fcltynm,
            start: item.prfpdfrom,
            end: item.prfpdto,
            genre: item.genrenm,
            status: item.prfstate
          };
          resolve(performance);
        }
      });
    });

    return jsonData;
  } catch (error) {
    console.error(`Error fetching details for id ${id}`, error);
    return null;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { ids } = req.body;

    try {
      const detailPromises = ids.map((id: string) => fetchDetails(id));
      const details = await Promise.all(detailPromises);

      const filteredDetails = details.filter((detail) => detail !== null);

      res.status(200).json(filteredDetails);
    } catch (error) {
      res.status(500).json({ error: "Error fetching performance details" });
    }
  } else {
    res.status(405).json({ error: "Method not Allowed" });
  }
}
