import { Categoria } from '../models/Categoria.js';

export const createCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        return res.status(201).json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const getCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoria not found' });
        }
        return res.status(200).json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoria not found' });
        }

        await categoria.update(req.body);
        return res.status(200).json(categoria);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoria not found' });
        }
        await categoria.destroy();
        return res.status(200).json({ message: 'Categoria deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}