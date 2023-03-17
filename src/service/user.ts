import { db } from "../repository/db/connection";
import { User } from "../repository/model/user";

export const fetchAllUser = async (): Promise<User[]> =>{
  const users = await db.query("SELECT * FROM users")
  return users;
}

export const fetchPostOneUser = async (name :string, email:string): Promise<number> =>{
  const message = await db.result(`INSERT INTO users(name,email) VALUES ($1,$2)`,[name,email])
  return message.rowCount
}

export const fetchDeleteOneUser =  async (id :number) : Promise<number> =>{
  const result = await db.result(`DELETE FROM users WHERE id=$1 `,id)
  return result.rowCount
}
export const fetchUpdateUser = async (id :number, newName: string): Promise<number> =>{
  const result = await db.result(`UPDATE users SET name = $1`,newName)
  return result.rowCount
}