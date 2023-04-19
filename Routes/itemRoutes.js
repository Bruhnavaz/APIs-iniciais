import express from "express";
import itemController from "../Controllers/itemController.js";

const router = express.Router()



router.get('/', itemController.getAllItem)
router.post('/', itemController.createItem)
router.delete('/:id', itemController.deleteItem)
router.put('/:id',itemController.updateItem)
router.get('/:id', itemController.getItemById)



export default router