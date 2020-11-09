import React from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import MarvelLogo from '../MarvelLogo.png';

class Header extends React.Component {
    render() {
        return (
          
                    <header>
                  
                        <img className = 'logo' src = {MarvelLogo} alt = {MarvelLogo} />
                     
                    </header>

        );
    }
}

export default Header;