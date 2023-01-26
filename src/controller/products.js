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
//

module.exports = {
    createProduct,
    getAllProducts
}