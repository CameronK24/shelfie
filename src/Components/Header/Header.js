import React, {Component} from 'react';
import logo from '../../images/index.png'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='shelfie logo' />
                <h1>SHELFIE</h1>
            </div>
        )
    }
}

export default Header;