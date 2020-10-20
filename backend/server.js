const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req,res) => {
  res.send('API is running...');
})

app.get('/api/product', (req,res) => {
  res.json(products)
})

app.get('/api/products/:id', (req,res) => {
  const product = product.find((p) => p._id === req.params.id);
  res.json(products);
})

app.listen(5000, console.log('Server running on port 5000'))