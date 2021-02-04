const Pool = require('pg').Pool

const pool = new Pool({
    user: 'jessbon',
    host: 'localhost',
    database: 'toitech',
    password: '',
    port: 5432
})

const getProducts = (request, response) => {
    pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
        if(error){
            throw error
        }

        response.status(200).json(results.rows)
    })
}

const getProductById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
}

const createProduct = (request, response) => {
    console.log(request)
    const {title, price, description, image, likes} = request.body;

    pool.query('INSERT INTO products (title, price, description, image, likes) VALUES ($1, $2, $3, $4, $5)',
        [title, price, description, image, likes], 
        (error, results) => {
            if(error) {
                throw error
            }

            response.status(201).send(`Product added with ID: ${results.insertId}`)
    })
}

const updateProduct = (request, response) => {
    const id = parseInt(request.params.id);
    const { title, price, description, image, likes } = request.body;

    pool.query(
        'UPDATE products SET title = $1, price = $2, description = $3, image = $4, likes = $5 WHERE id = $6',
        [title, price, description, image, likes, id],
        (error, results) => {
            if(error) {
                throw error
            }

            response.status(200).send(`Product modified with ID: ${id}`)
        }
    )

}

const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }

        response.status(200).send(`Product deleted with ID: ${id}`)
    })
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}