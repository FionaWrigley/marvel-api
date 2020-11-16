import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';


class Character extends React.Component {

    render() {

        const {
            name,
            description,
            thumbnail,
            comics,
            series,
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