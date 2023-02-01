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
// const getAllProducts = async (req, res) => {
//     try {
//         const products = await productsModel.getAllProducts();

//         res.status(200).json({
//             message: 'Get all products is success',
//             length: products.rowCount,
//             products: products.rows
//         })
//     } catch (error) {
//         res.status(400).json({
//             message: error.message
//         })
//         console.log(error.message);
//     }
// }

// const getByCategory = async (req, res) => {
//     const { category } = req.params;
    
//     const categories = (category) => {
//         switch (category) {
//             case 'running':
//                 return 'Running Shoes';
//                 break;
//             case 'training':
//                 return 'Training Shoes';
//                 break;
//             case 'lifestyle':
//                 return 'Lifestyle Shoes';
//                 break;
//             case 'basketball':
//                 return 'Basketball Shoes';
//                 break;
//         }
//     };

//     const categoryProduct = categories(category);

//     try {
//         const products = await productsModel.getByCategory(categoryProduct);

//         res.status(200).json({
//             message: `Get ${categoryProduct} category is success`,
//             length: products.rowCount,
//             products: products.rows
//         })
//     } catch (error) {
//         res.status(400).json({
//             message: error.message
//         })
//         console.log(error.message);
//     }
// }

// const sortByPrice = async (req, res) => {
//     const { body } = req;

//     try {
//         const data = await productsModel.sortByPrice(body);
//         res.status(200).json({
//             message: 'Sorting by price is success',
//             length: data.rowCount,
//             data: data.rows
//         })
//     } catch (error) {
//         res.status(400).json({
//             message: error.message
//         })
//         console.log(error.message);
//     }
// }

const getProducts = async (req, res) => {
    const { body } = req;
    
    const bodyCategory = (body) => {
        switch (body.category) {
            case body.category='running':
                return "WHERE category='Running Shoes'";
                break;
            case body.category='training':
                return "WHERE category='Training Shoes'";
                break;
            case body.category='lifestyle':
                return "WHERE category='Lifestyle Shoes'";
                break;
            case body.category='basketball':
                return "WHERE category='Basketball Shoes'";
                break;
            case undefined:
                return '';
                break;
        }
    }
    const bodySortBy = (body) => {
        switch (body.sortBy) {
            case body.sortBy='ASC':
                return "ORDER BY price ASC";
                break;
            case body.sortBy='DESC':
                return "ORDER BY price DESC";
                break;
            case undefined:
                return '';
                break;
        }
    }

    const conditions = bodyCategory(body) + bodySortBy(body);

    try {
        const data = await productsModel.getProducts(conditions);
        res.status(200).json({
            message: 'Client request is success',
            length: data.rowCount,
            data: data.rows
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
    // getAllProducts,
    // getByCategory,
    // sortByPrice,
    getProducts,
    detailProduct,
    deleteProduct,
    editProduct
}