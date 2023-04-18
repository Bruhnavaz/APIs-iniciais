import { where } from "sequelize";
import User from "../models/userModel.js";
import Item from "../models/userModel.js"

//user

async function getAllUsers(req,res){
    const user = await User.findAll()
    res.json(user)
}


async function createUser(req,res){
    const user = await User.create(req.body)
    res.json(user)
}

async function deleteUser(req,res){
    const user = await User.destroy({where: {id: req.params.id}})
    res.json(user)
}

async function updateUser(req,res){
    const user = await User.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(user)
}

async function getUserById(req,res){
    const user = await User.findByPk(req.params.id)
    res.json(user)
}

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

//carrinho

async function getAllCarrinho(req,res){
    const carrinho = await carrinho.findAll()
    res.json(carrinho)
}


async function createCarrinho(req,res){
    const carrinho = await carrinho.create(req.body)
    res.json(carrinho)
}

async function deleteCarrinho(req,res){
    const carrinho = await carrinho.destroy({where: {id: req.params.id}})
    res.json(carrinho)
}

async function updateCarrinho(req,res){
    const carrinho = await carrinho.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(carrinho)
}

async function getCarrinhoById(req,res){
    const carrinho = await carrinho.findByPk(req.params.id)
    res.json(carrinho)
}

//cadastro
async function getAllCadastro(req,res){
    const cadastro = await cadastro.findAll()
    res.json(cadastro)
}

async function createCadastro(req,res){
    const cadastro = await cadastro.create(req.body)
    res.json(cadastro)
}

async function deleteCadastro(req,res){
    const cadastro = await cadastro.destroy({where: {id: req.params.id}})
    res.json(cadastro)
}

async function updateCadastro(req,res){
    const cadastro = await cadastro.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(cadastro)
}

async function getCadastroById(req,res){
    const cadastro = await cadastro.findByPk(req.params.id)
    res.json(cadastro)
}

export default {getAllUsers, createUser, deleteUser, updateUser, getUserById,getAllItem, createItem, deleteItem, updateItem, getItemById,getAllCarrinho, createCarrinho, deleteCarrinho, updateCarrinho, getCarrinhoById,getAllCadastro, createCadastro, deleteCadastro, updateCadastro, getCadastroById}