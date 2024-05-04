import "reflect-metadata"
import app from "./app"
import { AppDataSource } from './db'

async function main() {

    try {
        //iniciar la conexion
        await AppDataSource.initialize();
        console.log("Database connected")
        app.listen(3000)
        console.log('Server is listening on port', 3000)
    } catch (error) {
        console.log(error)
    }
}
main()
