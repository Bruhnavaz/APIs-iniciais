import { Sequelize } from "sequelize"
import db from "./db.js"

//Arrumar
const Banner = db.define("banner",{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }

})
export default Banner