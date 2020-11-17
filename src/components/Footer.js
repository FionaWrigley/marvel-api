import React from 'react';
import {Card} from 'react-bootstrap';
// import { MDBContainer,  MDBFooter } from "mdbreact";
//import * as bs from 'bootstrap/dist/css/bootstrap.css';

class Footer extends React.Component {
    render() {
        return (

            <Card id = "cardPos" bg="dark" className=" text-center">
            <Card.Footer>
                        <a className = "linkies" href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>			
			</Card.Footer>
            </Card>
              
        );
    }
}

export default Footer;