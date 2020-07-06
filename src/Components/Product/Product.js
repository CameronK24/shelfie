import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div className='product'>
                <img src={this.props.item.product_img} alt={this.props.item.product_name} />
                <section className='product-description'>
                    <p className='product-name'>{this.props.item.product_name} </p>
                    <p className='product-price'>${this.props.item.product_price} </p>
                </section>
            </div>
        )
    }
}

export default Product;