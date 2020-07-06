import React, {Component} from 'react';
import logo from '../../images/index.png'
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='shelfie logo' />
                <h1>SHELFIE</h1>
                <nav className='nav-bar'>
                    <Link to='/'><button>Dashboard</button></Link>
                    <Link to='/add'><button>Add Inventory</button></Link>
                </nav>
            </div>
        )
    }
}

export default Header;