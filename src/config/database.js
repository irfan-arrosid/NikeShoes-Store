const { Pool } = require('pg');

const dbPool = new Pool({
    host: 'localhost',
    user: 'irfanarrosid',
    password: 'at19ir97ar',
    database: 'nike_store'
})

dbPool.connect(err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('Database connected....')
    }
})

module.exports = dbPool;