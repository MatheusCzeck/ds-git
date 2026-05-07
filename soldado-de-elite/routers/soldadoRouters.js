import { Router } from "express";
import { createSoldado,
         getSoldados,
         getSoldado,
         updateSoldado,
         deleteSoldado
} from "../controllers/soldadoController.js"

const router = Router()

router.post("/soldados", createSoldado),
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
 *         description: Erro ao listar soldados
 *  
 */
router.get("/soldados", getSoldados),
router.get("soldados/:id", getSoldado),
router.put("/soldados/:id", updateSoldado),
router.delete("/soldado/:id", deleteSoldado)

export default router