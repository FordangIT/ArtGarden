import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response = await axios.get<string>(
      `${process.env.KOPIS_URL}/pblprfr?service=${process.env.KOPIS_KEY}&stdate=20160101&eddate=20240327&cpage=1&rows=100&prfstate=02&newsql=Y`
    );
    const xmlData = response.data;
    console.log(xmlData, "XML");
    // XML 데이터를 JSON으로 변환
    parseString(xmlData, (err, result) => {
      if (err) {
        console.error(err); // 오류가 발생한 경우 콘솔에 오류 메시지 출력
        return res.status(500).json({ error: "failed to parse XML" });
      }
      // 변환된 JSON 데이터를 클라이언트에 반환
      return res.status(200).json(result);
    });
  } catch (error) {
    console.error("error:", error); // API 요청에 대한 오류 처리
    res.status(500).json({ error: "internal server error" });
  }
}
