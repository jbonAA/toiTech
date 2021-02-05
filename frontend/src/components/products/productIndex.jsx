import React from 'react';
import ProductIndexItem from './productIndexItem';
import { fetchProducts } from '../../util/product_api_util';

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: [],
            currentPage: 1,
            productsPerPage: 10,
            productsOnPage: []
        }

        this.handlePageNum = this.handlePageNum.bind(this)
    }

    componentDidMount() {
        fetchProducts()
            .then((res) => {
                let products = res.data;

                const productsOnCurrentPage = products.slice(0, 10)

                this.setState({
                    products: res.data,
                    productsOnPage: productsOnCurrentPage
                })
            })
            
    }
    
    handlePageNum(n) {
        let {currentPage, productsPerPage, products} = this.state;
        currentPage = n

        const indexOfLastProd = currentPage * productsPerPage;
        const indexOfFirstProd = indexOfLastProd - productsPerPage;
        const productsOnCurrentPage = products.slice(indexOfFirstProd, indexOfLastProd)

        console.log(currentPage, "currentpage")
        console.log(productsOnCurrentPage)
        this.setState({
            currentPage,
            productsOnPage: productsOnCurrentPage
        })
    }

    render() {
        const {products, productsPerPage, productsOnPage} = this.state;
        const length = products.length

        

        let pages = Math.ceil(length / productsPerPage)
        const pageNumbers = []

        if (pages > 0){
            for(let i = 1; i <= pages; i++){
                pageNumbers.push(i)
            }
        }
        
        return (
            <div className={'productIndex'}>
                {productsOnPage.map((item, i) => {
                    return (
                        <li className={'product-list'} key={`prod-list${i}`}> <ProductIndexItem product={item} key={`${i}`} /> </li>
                    )
                })}
                <div className={'pagination'}>
                    {pageNumbers.map((n, i) => {
                        return (
                            <li key={`pagin${i}`} id="pagin-li">
                                <a href='#' onClick={() => this.handlePageNum(n)}>{n}</a>
                            </li>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default ProductIndex;