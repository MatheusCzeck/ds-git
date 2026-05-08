import { Sequelize } from "sequelize";
import { connectDB } from "../config/database";

export const Produto = sequelize.define("Produto", {
    id: {
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false    
    }
})