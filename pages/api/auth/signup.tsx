import { hashPassword } from "@/lib/utils/auth";
import { connectToDatabase } from "@/lib/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should also be at least 7characters"
    });
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword
  });

  res.status(201).json({ message: "Created user!" });
}

export default handler;
