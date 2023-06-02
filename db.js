import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config ()

const db = new Sequelize(
    "db",
    "user",
    "passw",
    {
        dialect: "postgres",
        storage: process.env.DATABASE_URL
    }

)

export default db