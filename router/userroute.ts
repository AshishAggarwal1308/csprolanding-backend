import express from "express"
import { RegisterUsers } from "../controller/registerUser"

const router=express.Router()

router.route("/register").post(RegisterUsers)


export default router