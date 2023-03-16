import { Request, Response } from 'express';
import { fetchAllUser } from '../service/user';

export const getAllUser = async (req :Request, res :Response):Promise<void> => {
  const users = await fetchAllUser()
  res.send(users)
}