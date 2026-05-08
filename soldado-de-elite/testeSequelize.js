import database from "./config/database.js"
import Produto from "./models/Produto.js"

(async () => {

    await database.sync();

    const novoProduto = await produto.Produto.create({
        nome: "MacBook Pro",
        preco: 1999.99,
        descricao: "Notebook de alta performance",
    })

    console.log(novoProduto)

})()