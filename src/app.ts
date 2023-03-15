import { config } from "dotenv";

import express, { Application, NextFunction, Request, Response } from 'express';
import cats from "./model/cat";


config()

const app: Application =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.get('/',(req: Request,res :Response, next: NextFunction)=>{
  res.send("Route Get Work")
})
app.get('/test',(req: Request,res :Response, next: NextFunction)=>{
  res.send("Testt")
})
app.post('/test',(req: Request, res :Response)=>{ 
  cats.push(req.body)
  console.log(cats.map((c) => c.name))
  return res.status(201).send("Cat has been Created "+ cats.map(c => {c.age}))
})

// app.route("/car").get(

// )

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`Listening to localhost:${PORT}`)
})