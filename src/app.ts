import { config } from "dotenv";

import express, { Application, NextFunction, Request, Response } from 'express';
import cars from "./repository/model/car";
import { cats } from "./repository/model/cat";
import { getAllUser } from "./usecase/user";


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

app.route("/users").get(getAllUser)




const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`Listening to localhost:${PORT}`)
})