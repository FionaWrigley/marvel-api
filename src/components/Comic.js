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

        return (
            <div>
                <div className="profileCard">
                    <Card className="card-width-25">
                        <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`}/>
                    </Card>
                    <div>
                    <Card className="card-width-25">
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>Issue# {issueNumber}</Card.Text>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Creators</Card.Title>

                            {creators
                                .items
                                .map((crtrs, index) => <Card.Text key={crtrs.name + index}>{crtrs.name}</Card.Text>)}
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                <div className="profileCard">
                    <Card className="card-width-25">
                        <Card.Body>
                            <Card.Title>Characters</Card.Title>

                            {characters
                                .items
                                .map((chars, index) => <Card.Text key={chars.name + index}>{chars.name}</Card.Text>)}
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        )
    }
}

export default Comic;