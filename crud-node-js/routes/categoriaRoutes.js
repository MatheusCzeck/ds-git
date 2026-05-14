import { Router } from "express";
import {
    createCategoria,
    getCategorias,
    getCategoria,
    updateCategoria,
    deleteCategoria
} from "../controllers/categoriaController.js";

const router = Router();

/**
 * @swagger
 * /categoria:
 *   post:
 *     summary: Cria um Categorias
 *     tags: [Categorias]
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
 *         description: Categoria criado
 *       500:
*          description: Erro ao listar Categorias
 */
router.post("/categoria", createCategoria)

/**
 * @swagger
 * /categoria:
 *   get:
 *     summary: Lista todos os Categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de Categorias
 *       500:
 *         description: Erro ao listar Categorias
 */
router.get("/categoria", getCategorias)

/**
 * @swagger
 * /categoria/{id}:
 *   get:
 *     summary: Busca um Categoria por ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Categoria
 *     responses:
 *       200:
 *         description: Categoria encontrado
 *       404:
 *         description: Categoria não encontrado
 *       500:
 *         description: Erro ao buscar Categoria
 */
router.get("/categoria/:id", getCategoria)

/**
 * @swagger
 * /categoria/{id}:
 *   put:
 *     summary: Atualiza um Categoria
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Categoria
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
 *         description: Categoria atualizado
 *       404:
 *         description: Categoria não encontrado
 *       500:
 *         description: Erro ao atualizar Categoria
 */
router.put("/categoria/:id", updateCategoria)

/**
 * @swagger
 * /categoria/{id}:
 *   delete:
 *     summary: Remove um Categoria
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Categoria
 *     responses:
 *       200:
 *         description: Categoria removido
 *       404:
 *         description: Categoria não encontrado
 *       500:
 *         description: Erro ao remover Categoria
 */
router.delete("/categoria/:id", deleteCategoria)

export default router;
