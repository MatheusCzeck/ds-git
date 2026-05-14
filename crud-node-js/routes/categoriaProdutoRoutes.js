import { Router } from "express";
import {
    createCategoriaProduto,
    getCategoriaProdutos,
    getCategoriaProduto,
    updateCategoriaProduto,
    deleteCategoriaProduto
} from "../controllers/categoriaProdutoController.js";

const router = Router();

/**
 * @swagger
 * /categoriaProduto:
 *   post:
 *     summary: Cria um CategoriaProdutos
 *     tags: [CategoriaProdutos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: CategoriaProduto criado
 *       500:
*          description: Erro ao listar CategoriaProdutos
 */
router.post("/categoriaProduto", createCategoriaProduto)

/**
 * @swagger
 * /categoriaProduto:
 *   get:
 *     summary: Lista todos os CategoriaProdutos
 *     tags: [CategoriaProdutos]
 *     responses:
 *       200:
 *         description: Lista de CategoriaProdutos
 *       500:
 *         description: Erro ao listar CategoriaProdutos
 */
router.get("/categoriaProduto", getCategoriaProdutos)

/**
 * @swagger
 * /categoriaProduto/{id}:
 *   get:
 *     summary: Busca um CategoriaProduto por ID
 *     tags: [CategoriaProdutos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do CategoriaProduto
 *     responses:
 *       200:
 *         description: CategoriaProduto encontrado
 *       404:
 *         description: CategoriaProduto não encontrado
 *       500:
 *         description: Erro ao buscar CategoriaProduto
 */
router.get("/categoriaProduto/:id", getCategoriaProduto)

/**
 * @swagger
 * /categoriaProduto/{id}:
 *   put:
 *     summary: Atualiza um CategoriaProduto
 *     tags: [CategoriaProdutos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do CategoriaProduto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: CategoriaProduto atualizado
 *       404:
 *         description: CategoriaProduto não encontrado
 *       500:
 *         description: Erro ao atualizar CategoriaProduto
 */
router.put("/categoriaProduto/:id", updateCategoriaProduto)

/**
 * @swagger
 * /categoriaProduto/{id}:
 *   delete:
 *     summary: Remove um CategoriaProduto
 *     tags: [CategoriaProdutos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do CategoriaProduto
 *     responses:
 *       200:
 *         description: CategoriaProduto removido
 *       404:
 *         description: CategoriaProduto não encontrado
 *       500:
 *         description: Erro ao remover CategoriaProduto
 */
router.delete("/categoriaProduto/:id", deleteCategoriaProduto)

export default router;
