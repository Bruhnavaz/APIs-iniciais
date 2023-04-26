import { Sequelize } from "sequelize"
import db from "./db.js"

const Item = db.define("item",{

    idItem: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
     validade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
     cod: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

})
export default Item