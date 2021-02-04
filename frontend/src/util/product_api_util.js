import axios from 'axios';


export const fetchProducts = () => {
    return axios.get(`http://localhost:3001/products`)
}

export const deleteProduct = (prodID) => {
    return axios.delete(`/products/${prodID}`)
}

export const updateProduct = (req) => {
    return axios.patch(`/products/${req._id}`, req)
}