import { config } from "dotenv";

import express, { Application, NextFunction, Request, Response } from 'express';
import cars from "./model/car";
import { Cat, cats } from "./model/cat";
import { getAllUser } from "./service/user";


config()

const app: Application =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

function middleware(req: Request<Cat>, res: Response,next: NextFunction) {
  //@ts-ignore
}

app.get('/',(req: Request,res :Response, next: NextFunction)=>{
  res.send("Route Get Work")
})
app.get('/test',(req: Request,res :Response, next: NextFunction)=>{
  res.send("Testt")
})
app.post('/test',(req: Request, res :Response)=>{ 
  console.log(cats.map((c) => c.name))
  return res.status(201).send(cats)
})

app.route("/car").get(
  (req,res) =>{
    return res.json(cars)
  }
).post(
  (req,res) =>{
    cars.push(req.body)
    return res.status(201).json(cars)
  }
)

app.route("/books/:id/:author").get(
  (req,res)=>{
    return res.send(req.params.id)
  }
)

app.route("/users").get(
  async (req :Request, res :Response)  =>{
    const users = await getAllUser()
    res.send(users)
  }
)




const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`Listening to localhost:${PORT}`)
})