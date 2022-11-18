const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    volume: Number, 
    brand: String,
    stock: Number, 
    imageUrl: String,
    degrees: Number
})

const Product = mongoose.model('product', productSchema )

module.exports = Product