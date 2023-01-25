const express = require('express');
const app = express();
const PORT = 3000;
const dbPool = require('../src/config/database');

app.get('/', (req, res) => {
    res.send('Nike Shoes Store')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})