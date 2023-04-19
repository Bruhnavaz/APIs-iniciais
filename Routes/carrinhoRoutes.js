import express from "express";
import carrinhoController from "../Controllers/carrinhoController.js";

const router = express.Router()


router.get('/', carrinhoController.getAllCarrinho)
router.post('/', carrinhoController.createCarrinho)
router.delete('/:id', carrinhoController.deleteCarrinho)
router.put('/:id',carrinhoController.updateCarrinho)
router.get('/:id', carrinhoController.getCarrinhoById)


export default router