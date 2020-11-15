import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';

const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
// const curr_date = new Date();
const api_key = "9d05ce6e21991600d98e5945c00379bc";
// const p_key = "7e2bff76f1dc639652508d49739b83a6d31873a4";
const time_stamp = 1;

class Character extends React.Component {


    render() {

        const {
            id,
            name,
            description,
            thumbnail,
            comics,
            series,
            events
        } = this.props.character;

        return (
            <div>
                <div className="profileCard">
                    <Card className="card-width-25">
                        <Card.Img
                            className="profilePic"
                            variant="left"
                            src={`${thumbnail.path}.${thumbnail.extension}`}/>
                    </Card>
                    <Card className="card-width-25">
                        <Card.Body>
                            <Card.Title className="text-center">{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className= "profileCard">
                    <Card className="card-width-25">
                        <Card.Body>
                            <Card.Title>Series</Card.Title>
                            {series
                                .items
                                .map((srs, index) => <Card.Text key={srs.name + index}>{srs.name}</Card.Text>)}
                        </Card.Body>
                    </Card>
                    <Card className="card-width-25">
                        <Card.Body>
                            <Card.Title>Comics</Card.Title>
                            {comics
                                .items
                                .map((cmcs, index) => <Card.Text key={cmcs.name + index}>{cmcs.name}</Card.Text>)}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}
export default Character;
