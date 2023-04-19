import express from "express";
import bannerController from "../Controllers/bannerController.js";

const router = express.Router()


router.get('/', bannerController.getAllBanner)
router.post('/', bannerController.createBanner)
router.delete('/:id', bannerController.deleteBanner)
router.put('/:id',bannerController.updateBanner)
router.get('/:id', bannerController.getBannerById)


export default router