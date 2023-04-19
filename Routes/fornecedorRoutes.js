import express from "express";
import fornecedorController from "../Controllers/fornecedorController.js";

const router = express.Router()


router.get('/', fornecedorController.getAllFornecedor)
router.post('/', fornecedorController.createFornecedor)
router.delete('/:id', fornecedorController.deleteFornecedor)
router.put('/:id',fornecedorController.updateFornecedor)
router.get('/:id', fornecedorController.getFornecedorById)


export default router