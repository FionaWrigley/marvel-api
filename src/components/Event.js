import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import {useLocation} from "react-router-dom";

const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
const {REACT_APP_APIKEY} = process.env;
const time_stamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/events/";

const Event = () => {

    console.log("in event");

    const id = useLocation()
        .search
        .replace('?id=', '');
    console.log(id);

    const [card,
        setCard] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {

        console.log("made it this far!!!!!!!!!!!")
        axios.get(url + id, {
            params: Object
                .assign({
                    apikey: REACT_APP_APIKEY, 
                    ts: time_stamp, 
                    hash: hashish})})
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
        </div>) : (<div>Loading...</div>)
        
    );

};

export default Event;