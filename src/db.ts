import { DataSource } from "typeorm";
import { config } from 'dotenv';
config(); // Cargar variables de entorno desde el archivo .env

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.IPSEVERMYSQL || "localhost",
    port: 3306, // Puerto predeterminado de MySQL
    username: process.env.USERDATABASE || "root",
    password: process.env.PASSUSER || "",
    database: process.env.DATABASE || "test",
    //synchronize: true,
    logging: true,
    entities: [], // Asegúrate de importar Post y Category desde tus entidades
    //subscribers: [],
    //migrations: [],
});