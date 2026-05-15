import { Router } from "express";
import {
    createCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente
} from "../controllers/clienteController.js";

const router = Router();

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Cria um usuário
 *     security:
 *       - bearerAuth: []
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado
 *       500:
 *         description: Erro ao listar cliente
 */
router.post("/cliente", createCliente);

/**
 * @swagger
 * /cliente:
 *   get:
 *     summary: Lista todos os Clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de Clientes
 *       500:
 *         description: Erro ao listar Clientes
 */
router.get("/cliente", getClientes);

/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     summary: Busca um Cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro ao buscar Cliente
 */
router.get("/cliente/:id", getCliente);

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Atualiza um Cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cpf:
 *                 type: integer
 *                 format: int64
 *                 maximum: 99999999999
 *                 minimum: 0
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro ao atualizar Cliente
 */
router.put("/cliente/:id", updateCliente);

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Remove um Cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Cliente
 *     responses:
 *       200:
 *         description: Cliente removido
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro ao remover Cliente
 */
router.delete("/cliente/:id", deleteCliente);

export default router;