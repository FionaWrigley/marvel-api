import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';


class Comic extends React.Component {

    render() {

        const {
            title,
            description,
            thumbnail,
            characters,
            issueNumber,
            creators,
            events
        } = this.props.comic;
        console.log(this.props.comic);
        
        return (
            <Card className="text-center card-width-25">
                <Card.Img variant="top" src = {`${thumbnail.path}.${thumbnail.extension}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{issueNumber}</Card.Text>
                    <Card.Text>{description}</Card.Text>

                    <Card.Title>Characters</Card.Title>
                    <Card.Text>{characters.items[0].name}</Card.Text>

                    <Card.Title>Creators</Card.Title>
                    <Card.Text>{creators.items[0].name}</Card.Text>
                </Card.Body>
            </Card>
        );

    }
}
export default Comic;