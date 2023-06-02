import { Sequelize } from "sequelize";

const db = new Sequelize(
    "db",
    "user",
    "passw",
    {
        dialect: "sqlite",
        storage: './db.sqlite'
    }

)

export default db