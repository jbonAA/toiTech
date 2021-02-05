import React from 'react';

class ProductIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.product.id !== nextProps.product.id){
            return true
        }
    }

    render() {

        const { product } = this.props;
        console.log(product)
        return (
            <div className={'product-item-outer'}>
                <div className={'product-item-image'}>
                    <img src={`${product.image}`} alt="" id="prod-image"/>
                </div>
                <div className={'product-item-info'}>
                    <div className={'product-item-header'}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className={'product-price-likes'}>
                        <p>${product.price}</p>
                        <p>Likes: {product.likes}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductIndexItem