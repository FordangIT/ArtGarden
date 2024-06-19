//들어온 password 암호화하기.
import { hash } from "bcryptjs";

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
