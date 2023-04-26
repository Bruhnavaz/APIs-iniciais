import { where } from "sequelize";
import User from "../Models/userModel.js";


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





export default {getAllUsers, createUser, deleteUser, updateUser, getUserById}