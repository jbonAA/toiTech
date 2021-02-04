const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3000;

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express and Postgres'})
})

app.get('/products', db.getProducts)
app.get('/products/:id', db.getProductById)
app.post('/products', db.createProduct)
app.put('/products/:id', db.updateProduct)
app.delete('/products/:id', db.deleteProduct)

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

