import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import {useLocation} from "react-router-dom";
import Loading from "./Loading";
import { GetCredentials } from './GetCredentials';

const {REACT_APP_URL_EVENTS} = process.env;

const Event = () => {

    const id = useLocation()
        .search
        .replace('?id=', '');

    const [card,
        setCard] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {

        axios.get(REACT_APP_URL_EVENTS + id + GetCredentials())
                .then((response) => {
                    setCard(response.data.data.results[0])
                    setReady(true);
                })
                .catch(function (err) {
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
                        <Card.Title className="text-center">{card.title}</Card.Title>
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

export default Event;