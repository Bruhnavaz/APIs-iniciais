import { Sequelize } from "sequelize"
import db from "./db.js"

const Carrinho = db.define("carrinho",{
    //Arrumar
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

    export default Carrinho
    