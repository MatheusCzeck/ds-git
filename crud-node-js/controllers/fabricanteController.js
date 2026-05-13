import { Fabricante } from '../models/Fabricante.js';

export const createFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.create(req.body);
        return res.status(201).json(fabricante);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll();
        return res.status(200).json(fabricantes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const getFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (!fabricante) {
            return res.status(404).json({ message: 'Fabricante not found' });
        }
        return res.status(200).json(fabricante);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (!fabricante) {
            return res.status(404).json({ message: 'Fabricante not found' });
        }

        await fabricante.update(req.body);
        return res.status(200).json(fabricante);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (!fabricante) {
            return res.status(404).json({ message: 'Fabricante not found' });
        }
        await fabricante.destroy();
        return res.status(200).json({ message: 'Fabricante deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}