import axios from 'axios';


export const fetchProducts = () => {
    return axios.get(`http://localhost:3001/products`)
}

export const deleteProduct = (prodID) => {
    return axios.delete(`http://localhost:3001/products/${prodID}`)
}

export const updateProduct = (req) => {
    return axios.patch(`http://localhost:3001/products/${req._id}`, req)
}