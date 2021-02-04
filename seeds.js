const axios = require('axios');

const updateTables = (dataArr) => {
    
    //iterate through response data
    dataArr.forEach( async (product) => {
        //deconstruct keys
        const {title, price, description, image} = product;
        // console.log(product)
        //query url w/ axios passing in keys & vals in body
        await axios.post('http://localhost:3000/products', {
            title,
            price,
            description,
            image,
            likes: 0
        })
        .then(res => {
            //ensure positive response
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    })
}

const fetchProducts = () => {

    axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            updateTables(response.data)
        })
}

fetchProducts()