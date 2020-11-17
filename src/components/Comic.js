import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import {useLocation} from "react-router-dom";
import Loading from './Loading';

// class Comic extends React.Component {

//     render() {

//         const {
//             title,
//             description,
//             thumbnail,
//             characters,
//             issueNumber,
//             creators,
//         } = this.props.comic;

//         return (
//             <div>
//                 <div className="profileCard">
//                     <Card className="card-width-25">
//                         <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`}/>
//                     </Card>
//                     <div>
//                     <Card className="card-width-25">
//                         <Card.Body>
//                             <Card.Title>{title}</Card.Title>
//                             <Card.Text>Issue# {issueNumber}</Card.Text>
//                             <Card.Text>{description}</Card.Text>
//                         </Card.Body>
//                     </Card>
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>Creators</Card.Title>

//                             {creators
//                                 .items
//                                 .map((crtrs, index) => <Card.Text key={crtrs.name + index}>{crtrs.name}</Card.Text>)}
//                         </Card.Body>
//                     </Card>
//                     </div>
//                 </div>
//                 <div className="profileCard">
//                     <Card className="card-width-25">
//                         <Card.Body>
//                             <Card.Title>Characters</Card.Title>

//                             {characters
//                                 .items
//                                 .map((chars, index) => <Card.Text key={chars.name + index}>{chars.name}</Card.Text>)}
//                         </Card.Body>
//                     </Card>
                    
//                 </div>
//             </div>
//         )
//     }
// }

// export default Comic;

const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
const {REACT_APP_APIKEY} = process.env;
const time_stamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/comics/";

const Comic = () => {

    console.log("in comic");

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