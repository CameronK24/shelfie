import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div className='product'>
                <img src={this.props.item.product_img} alt={this.props.item.product_name} />
                <section className='product-description'>
                    <div>
                        <p className='product-name'>{this.props.item.product_name} </p>
                        <p className='product-price'>${this.props.item.product_price} </p>
                    </div>
                    <div className='product-btns'>
                        <button onClick={() => this.props.deleteInventoryFn(this.props.item.id)}>Delete</button>
                        <button onClick={() => this.props.getCurrentItemFn(this.props.item)}>Edit</button>
                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Product;