import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            price: 0,
            imgUrl: '',
            id: null
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editItem != this.props.editItem) {
            // console.log(this.props.editItem);
            this.setState({id: this.props.editItem.id, name: this.props.editItem.product_name, price: this.props.editItem.product_price, imgUrl: this.props.editItem.product_img});
        }
        // else if (prevProps.editItem === this.props.editItem) {
        //     this.setState({id: null});
        // }
    }

    updateName = (val) => {
        this.setState({name: val});
    }

    updatePrice = (val) => {
        this.setState({price: +val});
    }

    updateImg = (val) => {
        this.setState({imgUrl: val});
    }

    resetState = () => {
        this.setState({name: '', price: 0, imgUrl: '', id: null});
    }

    postInventory = () => {
        const newInventory = {
            name: this.state.name,
            price: this.state.price,
            imgUrl: this.state.imgUrl
        }

        // console.log({newInventory});

        axios.post('/api/inventory', newInventory)
            .then(res => {
                this.props.getInventoryFn();
                this.resetState();
            })
            .catch(err => console.log(err));
    }

    putInventory = () => {
        const id = this.state.id;
        const editedItem = {
            name: this.state.name,
            price: this.state.price,
            imgUrl: this.state.imgUrl
        }
        console.log(editedItem);
        axios.put(`/api/inventory/${id}`, editedItem)
            .then(res => {
                this.props.getInventoryFn();
                this.resetState();
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='product-form'>
                <img className='img-preview' src={this.state.imgUrl} />
                <p>Image URL:</p>
                <input value={this.state.imgUrl} onChange={e => this.updateImg(e.target.value)} />
                <p>Product Name:</p>
                <input value={this.state.name} onChange={e => this.updateName(e.target.value)} />
                <p>Price:</p>
                <input value={this.state.price} onChange={e => this.updatePrice(e.target.value)} />
                <section className='form-btns'>
                    <button onClick={this.resetState} >Cancel</button>
                    {this.state.id != null
                    ? (
                        <div>
                            <button onClick={this.putInventory} >Save Changes</button>
                        </div>
                    )
                    : ( 
                        <div>
                            <button onClick={this.postInventory} >Add to Inventory</button>
                        </div>   
                    )
                    }
                    
                </section>
            </div>
        )
    }
}

export default Form;