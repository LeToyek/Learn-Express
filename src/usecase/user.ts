import { Request, Response } from 'express';
import { fetchAllUser, fetchDeleteOneUser, fetchPostOneUser, fetchUpdateUser } from '../service/user';

export const getAllUser = async (req :Request, res :Response):Promise<void> => {
  const users = await fetchAllUser()
  res.send(users)
}

export const addUser = async (req :Request, res :Response):Promise<void> =>{
  const {name,email} = req.body
  try {
    if (await fetchPostOneUser(name,email) > 0){
      res.status(201).send(`An User record with email ${email} has been successfully created`)
      return
    }
    res.status(400).json({"message": "Failed to created user"})
  } catch (error) {
    res.status(500).send({"message": error})
  }
}
export const kickUser = async (req :Request, res :Response) :Promise<void> =>{
  const id = req.params.id
  try {
    if(await fetchDeleteOneUser(parseInt(id))> 0){
      res.status(200).send(`An User record with id ${id} has been successfully deleted`)
      return
    }
    res.status(400).send({"message": `Unknown user with ID ${id}`});
  } catch (error) {
    res.status(500).send({"message": error})
  }
}
export const updateUser = async (req :Request, res :Response) :Promise<void> =>{
  const id = req.params.id
  const {newName} = req.body
  try {
    if(await fetchUpdateUser(parseInt(id),newName)>0){
      res.status(200).send({"message" : `The user with ID ${id} has been successfully updated `});
      return
    }
    res.status(400).send({"message": `Unknown user with ID ${id}`});
  } catch (error) {
    res.status(500).send({"message": error})
  }
}