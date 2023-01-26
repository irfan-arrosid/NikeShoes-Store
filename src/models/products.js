const dbPool = require('../config/database');

const createProduct = (body) => {
    const SQLQuery = `INSERT INTO mens_shoes (name, category, colorway, price) VALUES ('${body.name}', '${body.category}', ${body.colorway}, ${body.price})`;

    return dbPool.query(SQLQuery);
};

const getAllProducts = () => {
    const SQLQuery = 'SELECT * FROM mens_shoes'

    return dbPool.query(SQLQuery);
}

module.exports = {
    createProduct,
    getAllProducts
};