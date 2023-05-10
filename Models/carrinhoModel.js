import { Sequelize } from "sequelize"
import db from "../db.js"

const Carrinho = db.define("carrinho",{
    
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        valor: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        itens: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
         },
        endereco: {
            type: Sequelize.STRING,
            allowNull: true
        }
    
    })

    export default Carrinho
    