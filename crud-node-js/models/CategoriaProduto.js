import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const CategoriaProduto = sequelize.define("categoriaProduto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});

export default CategoriaProduto;