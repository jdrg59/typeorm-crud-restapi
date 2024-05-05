import { Router } from "express"
import { createUser } from "../controllers/user.controllers"

//import route in app.ts

const router = Router()

router.post('/users', createUser)

export default router