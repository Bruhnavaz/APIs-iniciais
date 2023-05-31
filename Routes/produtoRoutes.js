import express from "express";
import produtoController from "../Controllers/produtoController.js";

const router = express.Router()



router.get('/', produtoController.getAllProduto)
router.post('/', produtoController.createProduto)
router.delete('/:id', produtoController.deleteProduto)
router.put('/:id',produtoController.updateProduto)
router.get('/:id', produtoController.getProdutoById)



export default router