import { config } from "dotenv";
import express, { Application, NextFunction, Request, Response } from 'express';

config()

const app: Application =express()

app.get('/',(req: Request,res :Response, next: NextFunction)=>{
  res.send("Route Get Work")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`Listening to localhost:${PORT}`)
})