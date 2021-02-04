const axios = require('axios');

const updateTables = (dataArr) => {
    
    //iterate through response data
    dataArr.forEach((product) => {
        //deconstruct keys
        const {title, price, description, image} = product;

        //construct query string
        const dataString = `title=${title}&price=${price}&description=${description}&image=${image}&likes=${0}`
        //curl to api

    })
}
// {
//     id: 16,
//         title:
//     'Lock and Love Women\'s Removable Hooded Faux Leather Moto Biker Jacket',
//         price: 29.95,
//             description:
//     '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
//         category: 'women clothing',
//             image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'
// },

const fetchProducts = () => {

    axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            //updateTables(response.data)
            console.log(response)
        })
}

fetchProducts()