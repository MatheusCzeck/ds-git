import { Router } from "express";
import {
    createFabricante,
    getFabricantes,
    getFabricante,
    updateFabricante,
    deleteFabricante
} from "../controllers/fabricanteController.js";

const router = Router();

/**
 * @swagger
 * /fabricante:
 *   post:
 *     summary: Cria um fabricantes
 *     tags: [Fabricantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Fabricante criado
 *       500:
*          description: Erro ao listar Fabricantes
 */
router.post("/fabricante", createFabricante)

/**
 * @swagger
 * /fabricante:
 *   get:
 *     summary: Lista todos os Fabricantes
 *     tags: [Fabricantes]
 *     responses:
 *       200:
 *         description: Lista de Fabricantes
 *       500:
 *         description: Erro ao listar Fabricantes
 */
router.get("/fabricante", getFabricantes)

/**
 * @swagger
 * /fabricante/{id}:
 *   get:
 *     summary: Busca um Fabricante por ID
 *     tags: [Fabricantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Fabricante
 *     responses:
 *       200:
 *         description: Fabricante encontrado
 *       404:
 *         description: Fabricante não encontrado
 *       500:
 *         description: Erro ao buscar Fabricante
 */
router.get("/fabricante/:id", getFabricante)

/**
 * @swagger
 * /fabricante/{id}:
 *   put:
 *     summary: Atualiza um Fabricante
 *     tags: [Fabricantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Fabricante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fabricante atualizado
 *       404:
 *         description: Fabricante não encontrado
 *       500:
 *         description: Erro ao atualizar Fabricante
 */
router.put("/Fabricante/:id", updateFabricante)

/**
 * @swagger
 * /Fabricante/{id}:
 *   delete:
 *     summary: Remove um Fabricante
 *     tags: [Fabricantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Fabricante
 *     responses:
 *       200:
 *         description: Fabricante removido
 *       404:
 *         description: Fabricante não encontrado
 *       500:
 *         description: Erro ao remover Fabricante
 */
router.delete("/Fabricante/:id", deleteFabricante)

export default router;
