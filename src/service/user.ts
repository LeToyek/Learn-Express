import { db } from "../repository/db/connection";
import { User } from "../repository/model/user";

export const fetchAllUser = async (): Promise<User[]> =>{
  const users = await db.query("SELECT * FROM users")
  return users;
}

