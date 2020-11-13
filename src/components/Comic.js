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
            images,
            events
        } = this.props.comic;
        console.log(this.props.comic);
        
        return (
            <Card className="text-center card-width-25">
                <Card.Img variant="top" src = {`${thumbnail.path}.${thumbnail.extension}`} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Issue# {issueNumber}</Card.Text>
                    <Card.Text>{description}</Card.Text>

                    <Card.Title>Characters</Card.Title>
                       
                        {characters.items.map((chars, index) => <Card.Text key={chars.name+index}>{chars.name}</Card.Text>)}
                        
                   
                    <Card.Title>Creators</Card.Title>
                    {creators.items.map((crtrs, index) => <Card.Text key={crtrs.name+index}>{crtrs.name}</Card.Text>)}

                    {images.map((imgs, index) => <Card.Img key={imgs.path} variant="top" src = {`${imgs.path}.${imgs.extension}`} />)}
                </Card.Body>
            </Card>
        );

    }
}
export default Comic;