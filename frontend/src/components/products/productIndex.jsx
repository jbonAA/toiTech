import React from 'react';
import { fetchProducts } from '../../util/product_api_util';

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: [],
            pagination: 1
        }
    }

    componentDidMount() {
        fetchProducts()
            .then((res) => {
                console.log(res)
            })
    }

    render() {

        //include pagination and logic 

        return (
            <div className={'productIndex'}>

            </div>
        )
    }

}

export default ProductIndex;