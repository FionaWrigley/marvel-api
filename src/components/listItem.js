import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import '../App.css';

class ListItem extends React.Component {

    render() {
        const metaData = this.props.card;
        const {id, name, title, description, thumbnail, resourceURI} = metaData;
      
        return (
            <Card className="text-center">
                <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`}/>
                <Card.Body>
                    <Card.Title>{(name)
                            ? name
                            : title}
                    </Card.Title>
                    <Button onClick= {() => this.props.handleClick(metaData)} variant="warning">View deatils</Button>
                </Card.Body>
            </Card>
        );
    }
}
export default ListItem;
