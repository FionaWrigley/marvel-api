import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import MarvelLogo from './MarvelLogo.png';

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <header>
                  
                        <img className = 'logo' src = {MarvelLogo} alt = {MarvelLogo} />
                     
                    </header>
                </Row>
            </Container>

        );
    }
}

export default Header;