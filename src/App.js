import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import axios from 'axios';
import {HashRouter, Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {}    
    }
  }

  componentDidMount() {
    this.getInventory();
  }

  storeProduct = (itemToEdit) => {
    // console.log(itemToEdit);
    this.setState({currentItem: itemToEdit})
  }

  getInventory = () => {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({items: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state.currentItem);
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <section className='main-display'>
            <Dashboard items={this.state.items} getInventoryFn={this.getInventory} storeProductFn={this.storeProduct} />
            <Form editItem={this.state.currentItem} getInventoryFn={this.getInventory} />
          </section>        
        </div>
      </HashRouter>
    )
  }  
}

export default App;
