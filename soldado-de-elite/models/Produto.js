import { DataTypes } from "sequelize";
import connectDB from "../config/dbTestSequelize.js";
import Fabricante from "./fabricante.js";
import CategoriaProduto from "./CategoriaProduto.js";

const Produto = connectDB.define("produto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false    
    }
})

// 1:1
Produto.belongsTo(Fabricante, {
    foreignKey: "idFabricante",
    constraints: true
})

// 1:N
Fabricante.hasMany(Produto, {
    foreignKey: "idFabricante",
    constraints: true
})

// N:M
Produto.belongsToMany(CategoriaProduto, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: "idProduto",
    constraints: true
})
Produto.belongsToMany(Produto, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: "idCategoria",
    constraints: true
})
Produto.belongsToMany(CategoriaProduto, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: "idProduto",
    constraints: true
})

// Super Many-to-Many
Produto.hasMany(CategoriaProduto, {
    foreignKey: "idProduto"
})
CategoriaProduto.belongsTo(Produto, {foreignKey: "idProduto"})
Categoria.hasMany(CategoriaProduto, {foreignKey: "idCategoria"})
CategoriaProduto.belongsTo(Categoria, {foreignKey: "idCategoria"})

export default Produto