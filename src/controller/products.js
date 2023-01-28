const productsModel = require('../models/products');

// POST Controller
const createProduct = async (req, res) => {
    const { body } = req;

    try {
        await productsModel.createProduct(body);

        res.status(201).json({
            message: 'Create product is success',
            data: body
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    } 
}
//

// GET Controller
const getAllProducts = async (req, res) => {
    try {
        const products = await productsModel.getAllProducts();

        res.status(200).json({
            message: 'Get all products is success',
            length: products.rowCount,
            products: products.rows
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    }
}

const detailProduct = async (req, res) => {
    const { idProduct } = req.params;

    try {
        const products = await productsModel.detailProduct(idProduct);

        res.status(200).json({
            message: 'Get detail product is success',
            products: products.rows
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    }
}
//

// DELETE Controller
const deleteProduct = async (req, res) => {
    const { idProduct } = req.params;

    try {
        await productsModel.deleteProduct(idProduct);

        res.status(201).json({
            messaqe: 'Detele product is success',
            product: null
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    }
}
//

// UPDATE Controller
const editProduct = async (req, res) => {
    const { idProduct } = req.params;
    const { body } = req;

    try {
        await productsModel.editProduct(idProduct, body);

        res.status(201).json({
            message: 'Edit product is success',
            product: body
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    }
}
//

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    editProduct,
    detailProduct
}