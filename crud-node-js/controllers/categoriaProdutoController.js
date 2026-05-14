import { CategoriaProduto } from '../models/CategoriaProduto.js';

export const createCategoriaProduto = async (req, res) => {
    try {
        const categoriaProduto = await CategoriaProduto.create(req.body);
        return res.status(201).json(categoriaProduto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCategoriaProdutos = async (req, res) => {
    try {
        const categoriaProdutos = await CategoriaProduto.findAll();
        return res.status(200).json(categoriaProdutos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const getCategoriaProduto = async (req, res) => {
    try {
        const categoriaProduto = await CategoriaProduto.findByPk(req.params.id);
        if (!categoriaProduto) {
            return res.status(404).json({ message: 'CategoriaProduto not found' });
        }
        return res.status(200).json(categoriaProduto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateCategoriaProduto = async (req, res) => {
    try {
        const categoriaProduto = await CategoriaProduto.findByPk(req.params.id);
        if (!categoriaProduto) {
            return res.status(404).json({ message: 'CategoriaProduto not found' });
        }

        await categoriaProduto.update(req.body);
        return res.status(200).json(categoriaProduto);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteCategoriaProduto = async (req, res) => {
    try {
        const categoriaProduto = await CategoriaProduto.findByPk(req.params.id);
        if (!categoriaProduto) {
            return res.status(404).json({ message: 'CategoriaProduto not found' });
        }
        await categoriaProduto.destroy();
        return res.status(200).json({ message: 'CategoriaProduto deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}