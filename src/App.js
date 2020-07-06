import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header/Header';
import {HashRouter} from 'react-router-dom';
import routes from './routes';

class App extends Component {

  render() {
    // console.log(this.state.currentItem);
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <section className='main-display'>
            {routes} 
          </section>     
        </div>
      </HashRouter>
    )
  }  
}

export default App;
