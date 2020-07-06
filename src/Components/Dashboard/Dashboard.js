import React, {Component} from 'react';
import Product from '../Product/Product';
import { isCompositeComponent } from 'react-dom/test-utils';

class Dashboard extends Component {
    render() {
        console.log(this.props.items);
        // let productsArr = [];
        // productsArr[itemOne, itemTwo, itemThree] = this.props.items;
        const products = this.props.items.map((item, index) => (
            <Product key={index} item={item} />
        ));
        return (
            <div className='product-window'>
                {products}
            </div>
        )
    }
}

export default Dashboard;