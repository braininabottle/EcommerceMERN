const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: {type:String, required: true, minLenght: 8 },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        default: 'name'
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        default:'lastname'
    },
    address: {
        street: String,
        city: String
    },
    salt: {type: String, required: true}
})

userSchema.methods.hashPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

userSchema.methods.generateToken = function () {
    const token = jwt.sign({id:this._id}, process.env.SECRET)
    return token
}
const User = mongoose.model('user', userSchema )

module.exports = User               