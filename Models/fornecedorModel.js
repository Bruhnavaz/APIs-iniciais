import { Sequelize } from "sequelize"
import db from "../db.js"

//Arrumar
const Fornecedor = db.define("fornecedor",{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

export default Fornecedor