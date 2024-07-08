import express from "express"
import dotenv from "dotenv"
import { ConnectToDataBase } from "./Db/database";
import Users from "./router/userroute"
import cors from "cors"
const app=express();
app.use(cors())
dotenv.config()
app.use(express.json())
//connecting with database
ConnectToDataBase()


//routes for users
app.use("/api/v1",Users)


export default app;