import { where } from "sequelize";
import User from "../models/userModel.js";
import Item from "../models/userModel.js"


//Banner

async function getAllBanner(req,res){
    const banner = await Banner.findAll()
    res.json(banner)
}


async function createBanner(req,res){
    const banner = await Banner.create(req.body)
    res.json(banner)
}

async function deleteBanner(req,res){
    const banner = await Banner.destroy({where: {id: req.params.id}})
    res.json(banner)
}

async function updateBanner(req,res){
    const banner = await Banner.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(banner)
}

async function getBannerById(req,res){
    const banner = await Banner.findByPk(req.params.id)
    res.json(banner)
}
export default {getAllBanner, createBanner, deleteBanner, updateBanner, getBannerById}