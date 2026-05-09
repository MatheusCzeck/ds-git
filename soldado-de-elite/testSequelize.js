import sequelize from "./config/dbTestSequelize.js"
import Fabricante from "./models/fabricante.js";
import Produto from "./models/Produto.js"
import CategoriaProduto from "./models/CategoriaProduto.js";
import Categoria from "./models/categoria.js"

(async () => {
    await sequelize.sync({force: true})

    const novoFabricante = await Fabricante.create({
        nome: "Apple"
    })
    console.log(novoFabricante)
    const fabricanteAdd = await Fabricante.findByPk(1)
    const novoProduto = await Produto.create({
        nome: "MacBook Pro 2",
        preco: 10999.99,
        descricao: "Notebook de alta performance",
        idFabricante: novoFabricante.id
    })
    const novoProduto2 = await Produto.create({
        nome: "MacBook Air",
        preco: 7999.99,
        descricao: "Notebook de alta performance",
        idFabricante: novoFabricante.id
    })
    console.log(novoProduto)

    // 1:1
    // Lazy Loading
    const produtoLazy = await Produto.findByPk(1)
    const fabricanteLazy = await produtoLazy.getFabricante()
    console.log(fabricanteLazy.nome)

    // Eager loading
    const produtoEager = await Produto.findByPk(1, {
        include: [Fabricante]
    })
    console.log(produtoEager.Fabricante.nome)
    // 1:N
    const fabricante1ToN = await Fabricante.findByPk(1)
    const produtos = await fabricante1ToN.getProdutos()
    console.log(fabricante1ToN.produtos)

    // N:M
    const novaCategoria = await Categoria.create({
        nome: "Eletrônicos"
    })

    const produto = await Produto.findByPk(1)
    await produto.setCategoria(novaCategoria)

    const produtoNtoM = await Produto.findByPk(1, {
        include: [Categoria]
    })
    console.log(produtoNtoM.categoria)
})();