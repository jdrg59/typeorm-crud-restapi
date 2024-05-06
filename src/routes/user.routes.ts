import { Router } from "express"
import { createUser, getUsers } from "../controllers/user.controllers"

//import route in app.ts

const router = Router()

router.post('/users', createUser)
router.get('/users', getUsers)

export default router