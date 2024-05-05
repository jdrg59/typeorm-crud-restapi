
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
//Import custom routes
import  userRoutes from "./routes/user.routes";

const app = express()

app.use(morgan('dev'))
app.use(cors())

 //convert response json
 app.use(express.json())

app.use(userRoutes)

export default app;