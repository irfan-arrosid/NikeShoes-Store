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

module.exports = {
    createProduct
}