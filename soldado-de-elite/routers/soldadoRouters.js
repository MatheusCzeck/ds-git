import { Router } from "express";
import { createSoldado,
         getSoldados,
         getSoldado,
         updateSoldado,
         deleteSoldado
} from "../controllers/soldadoController.js"

const router = Router()

/** 
 * @swagger
 * /soldados:
 *   get:
 *     summary: Lista todos os soldados
 *     tags: [Soldados]
 *     responses:
 *       200:
 *         description: Lista de soldados
 *       500:
 *         description: Erro ao listar soldadoso
 *  
 */
router.post("/soldados", getSoldados)
/**
 * @swagger
 * /soldados/{id}:
 *   get:
 *     summary: Busca um soldado pelo ID
 *     tags: [Soldados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID único do soldado
 *     responses:
 *       200:
 *         description: Dados do soldado encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nome:
 *                   type: string
 *                 nomeDeGuerra:
 *                   type: string
 *                 patente:
 *                   type: string
 *                 tempoServico:
 *                   type: integer
 *                 ativo:
 *                   type: boolean
 *       404:
 *         description: Soldado não encontrado
 */
router.get("/soldados/{id}", getSoldado)
/**
 * @swagger
 * /soldados:
 *   post:
 *     summary: Cria um usuário
 *     tags: [Soldados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeDeGuerra:
 *                 type: string
 *               patente:
 *                 type: string
 *               tempoServico:
 *                 type: integer
 *               ativo:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post("/soldados", createSoldado)
/**
 * @swagger
 * /soldados/{id}:
 *   put:
 *     summary: Atualiza os dados de um soldado pelo ID
 *     tags: [Soldados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do soldado a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeDeGuerra:
 *                 type: string
 *               patente:
 *                 type: string
 *               tempoServico:
 *                 type: integer
 *               ativo:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Soldado atualizado com sucesso
 *       404:
 *         description: Soldado não encontrado
 */ 
router.put("/soldados/{id}", updateSoldado)
/**
 * @swagger
 * /soldado/{id}:
 *   delete:
 *     summary: Remove um soldado pelo ID
 *     tags: [Soldados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID único do soldado que será excluído
 *     responses:
 *       200:
 *         description: Soldado removido com sucesso
 *       404:
 *         description: Soldado não encontrado para exclusão
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/soldado/{id}", deleteSoldado)
export default router