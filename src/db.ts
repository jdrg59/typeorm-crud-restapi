import { DataSource } from "typeorm";
import { config } from 'dotenv';
import { User } from "./entities/user";
config(); // Cargar variables de entorno desde el archivo .env

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.IPSEVERMYSQL || "localhost",
    port: 3306, // Puerto predeterminado de MySQL
    username: process.env.USERDATABASE || "root",
    password: process.env.PASSUSER || "",
    database: process.env.DATABASE || "test",
    synchronize: true, //read entities and create table
    logging: true,
    entities: [ User ], // Asegúrate de importar Post y Category desde tus entidades
    //subscribers: [],
    //migrations: [],
});