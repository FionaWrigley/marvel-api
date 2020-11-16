import React, {useState} from 'react';
// import axios from 'axios';
import Header from './components/Header';
 import Character from './components/Character';
 import Comic from './components/Comic';
// import Event from './components/Event';
import './App.css';
import List from './components/List';
// import {useHistory, useLocation, useParams} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const App = () => {

    const [ctype,
        setCType] = useState('characters');
    const [card,
        setCard] = useState([]);
    const [searchValue,
        setSearchValue] = useState('');

    function handleClick(metaData) {
        setCard(metaData);
    }

    function handleKeyPress(key) {

        console.log(key.target.value);
        if (key.key === "Enter") {
            setSearchValue(key.target.value);
        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    // / ////////////////////////////////////////////////////////////////////////

    function submitHandler(e) {
        e.preventDefault();
    }

    // /////////////////////////////////////////////////////////////////////////////
    // / //////////////////////////////////////////////////////////////////////////
    return (
        <div className='App'>
            <Header/>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Search
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Form onSubmit={submitHandler} inline>
                            <FormControl
                                type="text"
                                id="search"
                                onKeyUp={(key) => handleKeyPress(key)}
                                placeholder="Search"
                                className="mr-sm-2"/>
                        </Form>
                        
                        <Link className = "linkies active"
                            to= {"/characters?search=" + searchValue}
                            id="characters">
                            Characters
                        </Link>
                        <Link className = "linkies"
                        to={"/comics?search=" + searchValue} id="comics">
                            Comics
                        </Link>
                    </Nav>
                </Navbar>

                <Switch>
                    <Route exact path="/">
                        <List
                            handleClick={(metaData) => handleClick(metaData)}
                            ctype="characters"
                            searchValue=""/>
                    </Route>
                    <Route exact path="/characters">
                        <List
                            handleClick={(metaData) => handleClick(metaData)}
                            ctype="characters"
                            searchValue={searchValue}/>
                    </Route>
                    <Route exact path="/comics">
                        <List
                            handleClick={(metaData) => handleClick(metaData)}
                            ctype="comics"
                            searchValue={searchValue}/>
                    </Route>
                    <Route exact path="/char">
                        <Character character ={card}/>
                    </Route>
                    <Route exact path="/com">
                        <Comic comic ={card}/>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;