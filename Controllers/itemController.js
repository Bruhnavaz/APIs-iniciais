// import { where } from "sequelize";
// import User from "../models/userModel.js";
import Item from "../Models/userModel.js"


//item
async function getAllItem(req,res){
    const item = await Item.findAll()
    res.json(item)
}

async function createItem(req,res){
    const item = await Item.create(req.body)
    res.json(item)
}

async function deleteItem(req,res){
    const item = await Item.destroy({where: {id: req.params.id}})
    res.json(item)
}

async function updateItem(req,res){
    const item = await Item.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(item)
}

async function getItemById(req,res){
    const item = await Item.findByPk(req.params.id)
    res.json(item)
}

export default {getAllItem, createItem, deleteItem, updateItem, getItemById}