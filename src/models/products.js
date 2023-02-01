const dbPool = require('../config/database');

const createProduct = (body) => {
    const SQLQuery = `INSERT INTO mens_shoes (name, category, colorway, price) VALUES ('${body.name}', '${body.category}', ${body.colorway}, ${body.price})`;

    return dbPool.query(SQLQuery);
};

const getAllProducts = () => {
    const SQLQuery = 'SELECT * FROM mens_shoes'

    return dbPool.query(SQLQuery);
}

const detailProduct = (idProduct) => {
    const SQLQuery = `SELECT * FROM mens_shoes WHERE mshoes_id=${idProduct}`;

    return dbPool.query(SQLQuery);
}

const deleteProduct = (idProduct) => {
    const SQLQuery = `DELETE FROM mens_shoes WHERE mshoes_id=${idProduct}`;

    return dbPool.query(SQLQuery);
}

const editProduct = (idProduct, body) => {
    const SQLQuery = `UPDATE mens_shoes SET name='${body.name}', category='${body.category}', colorway=${body.colorway}, price=${body.price} WHERE mshoes_id=${idProduct}`;

    return dbPool.query(SQLQuery);
}

const getByCategory = (categoryProduct) => {
    const SQLQuery = `SELECT * FROM mens_shoes WHERE category='${categoryProduct}'`;

    return dbPool.query(SQLQuery);
}

const sortByPrice = (body) => {
    const SQLQuery = `SELECT * FROM mens_shoes ORDER BY price ${body.sortBy}`;

    return dbPool.query(SQLQuery);
}

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    editProduct,
    detailProduct,
    getByCategory,
    sortByPrice
};