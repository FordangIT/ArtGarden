//mongodb에 연결하기.
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://fo_rdang:skfro100!@atlascluster.l3c4pyr.mongodb.net/"
  );
  return client;
}
