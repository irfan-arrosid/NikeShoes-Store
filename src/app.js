const express = require('express');
const app = express();
const PORT = 3000;

const productsRoutes = require('./routes/products');


// Middleware
app.use(express.json());
//

// Routes
app.use('/mens-shoes', productsRoutes);
//

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})