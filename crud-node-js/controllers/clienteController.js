import { Cliente } from '../models/Cliente.js';

export const createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const getCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente not found' });
        }
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente not found' });
        }

        await cliente.update(req.body);
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente not found' });
        }
        await cliente.destroy();
        return res.status(200).json({ message: 'Cliente deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}