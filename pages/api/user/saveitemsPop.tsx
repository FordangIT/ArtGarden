// pages/api/loadPopupStores.js
import clientPromise from "@/lib/utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Only POST requests are allowed" });
    return;
  }

  try {
    const { ids } = req.body; // 클라이언트에서 받은 ID 배열

    if (!Array.isArray(ids) || ids.length === 0) {
      res.status(400).json({ message: "Invalid ID array" });
      return;
    }

    const client = await clientPromise;
    const db = client.db("popupstores");
    const collection = db.collection("allPopupstores");

    // 해당 ObjectId로 문서 검색
    const documents = await collection.find({ id: { $in: ids } }).toArray();

    // _id를 문자열로 변환
    const result = documents.map((doc) => ({
      ...doc,
      id: doc.id.toString()
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error("Failed to fetch popup stores from MongoDB:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
