import { Sequelize } from "sequelize"
import db from "../db.js"

const Fornecedor = db.define("fornecedor",{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

export default Fornecedor