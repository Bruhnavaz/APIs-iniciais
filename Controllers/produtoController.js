import { where } from "sequelize";
import Produto from "../Models/produtoModel.js"


async function getAllProduto(req,res){
    const produto = await Produto.findAll()
    res.json(produto)
}

async function createProduto(req,res){
    const produto = await Produto.create(req.body)
    res.json(produto)
}

async function deleteProduto(req,res){
    const produto = await Produto.destroy({where: {id: req.params.id}})
    res.json(produto)
}

async function updateProduto(req,res){
    const produto = await Produto.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(produto)
}

async function getProdutoById(req,res){
    const produto = await Produto.findByPk(req.params.id)
    res.json(produto)
}

export default {getAllProduto, createProduto, deleteProduto, updateProduto, getProdutoById}