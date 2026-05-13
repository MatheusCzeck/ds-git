import { Router } from "express";
import {
    createProduto,
    getProdutos,
    getProduto,
    updateProduto,
    deleteProduto
} from "../controllers/produtoController.js";

const router = Router();

/**
 * @swagger
 * /produto:
 *   post:
 *     summary: Cria um produtos
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *                 format: float
 *                 example: 12.5
 *               descricao:
 *                 type: string
 *               idFabricante:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produto criado
 *       500:
*          description: Erro ao listar produtos
 */
router.post("/produto", createProduto)

/**
 * @swagger
 * /produto:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *       500:
 *         description: Erro ao listar produtos
 */
router.get("/produto", getProdutos)

/**
 * @swagger
 * /produto/{id}:
 *   get:
 *     summary: Busca um produto por ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: produto encontrado
 *       404:
 *         description: produto não encontrado
 *       500:
 *         description: Erro ao buscar produto
 */
router.get("/produto/:id", getProduto)

/**
 * @swagger
 * /produto/{id}:
 *   put:
 *     summary: Atualiza um produto
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *                 format: float
 *                 example: 12.5
 *               descricao:
 *                 type: string
 *               idFabricante:
 *                 type: integer
 *     responses:
 *       200:
 *         description: produto atualizado
 *       404:
 *         description: produto não encontrado
 *       500:
 *         description: Erro ao atualizar produto
 */
router.put("/Produto/:id", updateProduto)

/**
 * @swagger
 * /produto/{id}:
 *   delete:
 *     summary: Remove um produto
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: produto removido
 *       404:
 *         description: produto não encontrado
 *       500:
 *         description: Erro ao remover produto
 */
router.delete("/produto/:id", deleteProduto)

export default router;
