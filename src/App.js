import React, {Component, useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Character from './components/Character';
import Comic from './components/Comic';
import './App.css';
import List from './components/List';
import { useHistory, useLocation } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  

// const curr_date = new Date();
const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
const { REACT_APP_APIKEY } = process.env;
const time_stamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/";

    const App = () => {

        const [marvelData, setMarvelData] = useState([]);
        const [ctype, setCType] = useState('characters');
        const [cardClicked, setCardClicked] = useState(false);
        const [card, setCard] = useState([]);
        const [searchValue, setSearchValue] = useState('');


    let history = useHistory();

    
    function handleClick(metaData) {
        setCardClicked(true);
        setCard(metaData);
    }

    function navigate(link) {
        document
            .getElementById(ctype)
            .classList
            .remove('active');
        document
            .getElementById(link)
            .classList
            .add('active');

            setCType(link);
            setCardClicked(false);
            setSearchValue(document
                .getElementById('search')
                .value);
        }

    function handleKeyPress(key) {
        if (key.key === "Enter") {
            setSearchValue(key.target.value);
        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    // / ///////////////////////

        useEffect(() => {
  
        axios.get(url + ctype, {
            params: Object.assign({
                apikey: REACT_APP_APIKEY,
                ts: time_stamp,
                hash: hashish
        }, ( ctype === 'characters'
               ? (searchValue != ""
                    ? {
                        nameStartsWith: searchValue
                    }
                    : "")
             : (searchValue != ""
                    ? {
                        titleStartsWith: searchValue
                    }
                    : "")))
        }).then((response) => {
            console.log(response)
            console.log("response tracking")
            setMarvelData(response.data.data.results)
        })
            .catch(function (err) {
                console.log('error tracking')
                console.log(err);
            });
    },[ctype, searchValue]);

    function submitHandler(e){
        e.preventDefault();
    }
    // /////////////////////////////////////////////////////////////////////////////
    // / /////////////////////


    return (
            <div className='App'>
                <Header/>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Search
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Form onSubmit={submitHandler} inline>
                             <FormControl type="text" id="search" 
                                 onKeyUp={(key) => handleKeyPress(key)} placeholder="Search" className="mr-sm-2"/>     
                        </Form>
                        <Nav.Link
                            id="characters"
                            className="active"
                            onClick={() => navigate("characters")}>Characters</Nav.Link>
                        <Nav.Link id="comics" onClick={() => navigate("comics")}>Comics</Nav.Link>
                    </Nav>
                </Navbar>
    
                <div>
                    {(cardClicked)
                        ? ((ctype === 'characters')
                            ? <Character character ={card}/>
                            : <Comic comic ={card}/>)
                        : <List
                            handleClick={(metaData) => handleClick(metaData)}
                            results={marvelData}/>}
                </div>
            </div>
    )
    }
    
export default App;