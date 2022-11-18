const User = require('../models/User')
const crypto = require('crypto')

const createUser =  async (req, res) => {
    try{
        const emailFound  = await User.findOne({email: req.body.email})
        if(emailFound){
            throw new Error('This email is already used')
        }
        // const salt = crypto.randomBytes(16).toString('hex')
        // const hash = crypto.pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512').toString('hex')
        const newUser = new User(req.body)
        newUser.hashPassword(req.body.password)
        await newUser.save()
        res.json({
            success: true, 
            message: 'User created', 
            id:newUser._id, 
            token: newUser.generateToken() 
        })
    }catch(error){
        res.json({success: false, message: error.message})
    }
  
}

const getUsers = async (req, res) => {
    try{
        const users = await User.find() 
        res.json({success: true, users})
    }catch{
        res.json({success: false, message: error.message})
    }
}

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params
        const productFound =  await User.findByIdAndDelete(id)
        if(!productFound){
            throw new Error('The user is already deleted')
        }
        res.json({success: true, response: 'User deleted'})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}

const editUser = async (req, res) => {
    try{
        const { id } = req.params
        const productFound = await User.findByIdAndUpdate(id, req.body, {new: true})
        if(!productFound){
            throw new Error('The user is already modified')
        }
        res.json({success: true, response: 'User edited'})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}

const login = async (req,res) => {
    try{
        const { email, password } = req.body
        const userData = await User.findOne({email})
        if(!userData){
            throw new Error('wrong username or password')
        }

        const hash = crypto.pbkdf2Sync(password, userData.salt, 10000, 512, 'sha512').toString('hex')

        if(userData.password !== hash){
            throw new Error('Password does not match')
        }
        res.json({success: true, message:'You are logged in', token: userData.generateToken()})
    }catch(error){
        res.json({success: false, error: error.message})
    }
}

module.exports = { createUser, getUsers, deleteUser, editUser, login }

// Para que el usuario se cree una cuenta y despues inicie sesión manualmente el token no se envia en el createuser