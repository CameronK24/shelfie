import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state= {
            name: '',
            price: 0,
            imgUrl: ''
        }
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
        this.setState({name: '', price: 0, imgUrl: ''});
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
                    <button>Add to Inventory</button>
                </section>
            </div>
        )
    }
}

export default Form;