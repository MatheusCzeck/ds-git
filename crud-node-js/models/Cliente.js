import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Cliente = sequelize.define("cliente", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true
    },
    email: DataTypes.STRING,
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    }
}, {
    tableName: "clientes",
    timestamps: true
});