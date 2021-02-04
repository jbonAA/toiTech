const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3001;
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(express.static("frontend/build"))
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express and Postgres' })
})

app.get('/products', db.getProducts)
app.get('/products/:id', db.getProductById)
app.post('/products', db.createProduct)
app.put('/products/:id', db.updateProduct)
app.delete('/products/:id', db.deleteProduct)

