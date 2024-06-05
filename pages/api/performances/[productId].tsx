import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

interface Item {
  id: string;
  name: string;
  img: string;
  start: string;
  end: string;
  place: string;
  genre: string;
  state: string;
  cast: string;
  crew: string;
  runtime: string;
  age: string;
  price: string;
  story: string;
  styurls: string[] | string;
}

//상세 공연 정보 데이터 가져오는 것공연 이름을 검색하세요
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productId } = req.query;
  try {
    const response = await axios.get(
      `${process.env.KOPIS_URL}/pblprfr/${productId}?service=${process.env.KOPIS_KEY}&newsql=Y`
    );
    const xmlData = response.data;

    const data: Item[] = await new Promise((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        const parsedData: Item[] = result.dbs.db.map((item: any) => ({
          id: item.mt20id?.[0], //아이디
          name: item.prfnm?.[0], //공연 이름
          img: item.poster?.[0], //공연 포스터 이미지
          start: item.prfpdfrom?.[0], //공연 시작 날짜
          end: item.prfpdto?.[0], //공연 끝나는 날짜
          place: item.fcltynm?.[0], //장소
          genre: item.genrenm?.[0], // 장르
          state: item.prfstate?.[0], //공연 상태
          cast: item.fcltynm?.[0], //주최자
          crew: item.pcfcrew?.[0],
          runtime: item.prfruntime?.[0], //공연 소요 시간
          age: item.prfage?.[0], //공연 나이
          price: item.pcseguidance?.[0], //가격
          story: item.sty?.[0], //스토리
          styurls: item.styurls?.[0].styurl, //여러 이미지
          relates: item.relates?.[0].relate[0].relateurl[0] //예매처목록
        }));
        resolve(parsedData);
      });
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
}
