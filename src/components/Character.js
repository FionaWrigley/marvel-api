import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {Card} from 'react-bootstrap';
import axios from 'axios';
import Loading from "./Loading";
import { GetCredentials } from './GetCredentials';
import '../App.css';

const {REACT_APP_URL_CHARS} = process.env;

const Character = () => {

    const id = useLocation()
        .search
        .replace('?id=', '');
    console.log(id);

    const [card,
        setCard] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        axios.get(REACT_APP_URL_CHARS + id + GetCredentials())
                .then((response) => {
                    console.log(response)
                    setCard(response.data.data.results[0])
                    setReady(true);
                })
                .catch(function (err) {
                    console.log('error tracking')
                    console.log(err);
                });
        
    }, [id]);

    return (
        (ready) ? (<div>
            <div className="profileCard">
                <Card className="card-width-25">
                    <Card.Img
                        className="profilePic"
                        variant="left"
                        src={`${card.thumbnail.path}.${card.thumbnail.extension}`}/>
                </Card>
                <Card className="card-width-25">
                    <Card.Body>
                        <Card.Title className="text-center">{card.name}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="profileCard">
                <Card className="card-width-25">
                    <Card.Body>
                        <Card.Title>Series</Card.Title>
                        {card
                            .series
                            .items
                            .map((srs, index) => <Card.Text key={srs.name + index}>{srs.name}</Card.Text>)}
                    </Card.Body>
                </Card>
                <Card className="card-width-25">
                    <Card.Body>
                        <Card.Title>Comics</Card.Title>
                        {card
                            .comics
                            .items
                            .map((cmcs, index) => <Card.Text key={cmcs.name + index}>{cmcs.name}</Card.Text>)}
                    </Card.Body>
                </Card>
            </div>
        </div>) : (<Loading />) 
    );

};

export default Character;