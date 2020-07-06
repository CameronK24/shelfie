import React, {Component} from 'react';
import Product from '../Product/Product';
import { isCompositeComponent } from 'react-dom/test-utils';
import axios from 'axios';

class Dashboard extends Component {

    deleteInventory = (id) => {
        axios.delete(`/api/inventory/${id}`)
            .then(res => {
                this.props.getInventoryFn();
            })
            .catch(err => console.log(err));
    }

    getCurrentItem = (itemToUpdate) => {
        this.props.storeProductFn(itemToUpdate);
    }

    render() {
        // console.log(this.props.items);
        // let productsArr = [];
        // productsArr[itemOne, itemTwo, itemThree] = this.props.items;
        const products = this.props.items.map((item, index) => (
            <Product key={index} item={item} deleteInventoryFn={this.deleteInventory} getCurrentItemFn={this.getCurrentItem} />
        ));
        return (
            <div className='product-window'>
                {products}
            </div>
        )
    }
}

export default Dashboard;