import { db } from "../db/connection";
import { User } from "../model/user";

export const getAllUser = async (): Promise<User[]> =>{
  const users = await db.query("SELECT * FROM users")
  return users;

}