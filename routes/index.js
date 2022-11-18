const express = require('express')
const { 
    getProducts, 
    createProduct, 
    deleteProduct ,
    editProduct
} = require('../controllers/productsControllers')

const router = express.Router()

const { 
    createUser,
    getUsers,
    deleteUser,
    editUser, 
    login
} = require('../controllers/userControllers')
const auth = require('../middlewares/auth')

router.route('/products').get(getProducts).post(createProduct)
router.route('/products/:id').delete(deleteProduct).put(editProduct)

router.route('/users').post(createUser).get(getUsers)
router.route('/users/:id').delete(deleteUser).put(editUser)
router.route('/users/login').post(login)

module.exports = router