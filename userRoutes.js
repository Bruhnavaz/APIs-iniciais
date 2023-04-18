import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router()

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id',userController.updateUser)
router.get('/:id', userController.getUserById)

router.get('/', userController.getAllItem)
router.post('/', userController.createItem)
router.delete('/:id', userController.deleteItem)
router.put('/:id',userController.updateItem)
router.get('/:id', userController.getItemById)

router.get('/', userController.getAllCarrinho)
router.post('/', userController.createCarrinho)
router.delete('/:id', userController.deleteCarrinho)
router.put('/:id',userController.updateCarrinho)
router.get('/:id', userController.getCarrinhoById)

router.get('/', userController.getAllCadastro)
router.post('/', userController.createCadastro)
router.delete('/:id', userController.deleteCadastro)
router.put('/:id',userController.updateCadastro)
router.get('/:id', userController.getCadastroById)

export default router