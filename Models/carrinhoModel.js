import { Sequelize } from "sequelize"
import db from "./db.js"

const Carrinho = db.define("carrinho",{
    //Arrumar(forma de colocar cada item de forma individual e suas respectivas quantodades)
        idCarrinho: {
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
    