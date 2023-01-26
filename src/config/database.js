const { Pool } = require('pg');
require('dotenv').config();

const dbPool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

dbPool.connect(err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('Database connected....')
    }
})

module.exports = dbPool;