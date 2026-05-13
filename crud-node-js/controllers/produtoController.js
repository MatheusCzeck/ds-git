import { Produto } from '../models/Produto.js';

export const createProduto = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        return res.status(201).json(produto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const getProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto not found' });
        }
        return res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto not found' });
        }

        await produto.update(req.body);
        return res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProduto = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto not found' });
        }
        await produto.destroy();
        return res.status(200).json({ message: 'Produto deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}