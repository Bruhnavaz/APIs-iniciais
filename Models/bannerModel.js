import { Sequelize } from "sequelize"
import db from "../db.js"

const Banner = db.define("banner",{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {//imagem
        type: Sequelize.STRING,
        allowNull: false
    }

})
export default Banner