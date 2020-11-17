import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import {useLocation} from "react-router-dom";
import Loading from './Loading';
import { GetCredentials } from './GetCredentials';

const {REACT_APP_URL_COMICS} = process.env;

const Comic = () => {

    const id = useLocation()
        .search
        .replace('?id=', '');

    const [card,
        setCard] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {

        axios.get(REACT_APP_URL_COMICS + id + GetCredentials())
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
                    <Card.Img variant="top" src={`${card.thumbnail.path}.${card.thumbnail.extension}`}/>
                </Card>
                <div>
                <Card className="card-width-25">
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>Issue# {card.issueNumber}</Card.Text>
                        <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Creators</Card.Title>

                        {card.creators
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

                        {card.characters
                            .items
                            .map((chars, index) => <Card.Text key={chars.name + index}>{chars.name}</Card.Text>)}
                    </Card.Body>
                </Card>
                
            </div>
        </div>) : (<Loading />)
        
    );

};

export default Comic;