import { DataTypes } from "sequelize";
import connectDB from "../config/dbTestSequelize.js";

const Fabricante = connectDB.define("clientes", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Fabricante;