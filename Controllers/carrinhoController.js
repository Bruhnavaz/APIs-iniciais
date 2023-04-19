import { where } from "sequelize";
import User from "../models/userModel.js";
import Item from "../models/userModel.js"


//carrinho

async function getAllCarrinho(req,res){
    const carrinho = await Carrinho.findAll()
    res.json(carrinho)
}


async function createCarrinho(req,res){
    const carrinho = await Carrinho.create(req.body)
    res.json(carrinho)
}

async function deleteCarrinho(req,res){
    const carrinho = await Carrinho.destroy({where: {id: req.params.id}})
    res.json(carrinho)
}

async function updateCarrinho(req,res){
    const carrinho = await Carrinho.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(carrinho)
}

async function getCarrinhoById(req,res){
    const carrinho = await Carrinho.findByPk(req.params.id)
    res.json(carrinho)
}
export default {getAllCarrinho, createCarrinho, deleteCarrinho, updateCarrinho, getCarrinhoById}