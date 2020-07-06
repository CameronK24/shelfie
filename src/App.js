import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
// import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []    
    }
  }

  componentDidMount() {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({items: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <Header />
        <section className='main-display'>
          <Dashboard items={this.state.items} />
          <Form />
        </section>        
      </div>
    )
  }  
}

export default App;
