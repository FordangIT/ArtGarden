// lib/mongodb.ts

import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // 전역 변수를 TypeScript에서 인식시키기 위해 타입을 선언합니다.
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서 글로벌 변수를 사용하여 HMR에서 값이 유지되도록 합니다.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션 환경에서는 글로벌 변수를 사용하지 않습니다.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
