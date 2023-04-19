import { where } from "sequelize";
import User from "../models/userModel.js";
import Item from "../models/userModel.js"



//fornecedor
async function getAllFornecedor(req,res){
    const fornecedor = await Fornecedor.findAll()
    res.json(fornecedor)
}

async function createFornecedor(req,res){
    const fornecedor = await Fornecedor.create(req.body)
    res.json(fornecedor)
}

async function deleteFornecedor(req,res){
    const fornecedor = await Fornecedor.destroy({where: {id: req.params.id}})
    res.json(fornecedor)
}

async function updateFornecedor(req,res){
    const fornecedor = await Fornecedor.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(fornecedor)
}

async function getFornecedorById(req,res){
    const fornecedor = await Fornecedor.findByPk(req.params.id)
    res.json(fornecedor)
}
export default {getAllFornecedor, createFornecedor, deleteFornecedor, updateFornecedor, getFornecedorById}