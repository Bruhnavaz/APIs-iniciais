import { Sequelize } from "sequelize"
import db from "../db.js"

const Produto = db.define("produto",{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cod: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
     cnpjFornecedor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipoProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unidadeMedida: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publico: {
        type: Sequelize.STRING,
        allowNull: false
    }
  
})

export default Produto