import React, {useState} from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {Redirect, useHistory} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Character from './components/Character';
import Header from './components/Header';
import Footer from './components/Footer';
import Comic from './components/Comic';
import Event from './components/Event';
import List from './components/List';
import './App.css';

const App = () => {

    const [searchValue,
        setSearchValue] = useState('');

    const {PUBLIC_URL} = process.env;

    function handleKeyPress(key) {

        if (key.key === "Enter") {
            setSearchValue(key.target.value);
 
        }
    }
    // /
    // ////////////////////////////////////////////////////////////////////////////
    // / ////////////////////////////////////////////////////////////////////////

    function submitHandler(e) {
        e.preventDefault();
    }
    // /////////////////////////////////////////////////////////////////////////////
    // / //////////////////////////////////////////////////////////////////////////

    function handleClick() {
        setSearchValue(document.getElementById('search').value);
    }

    // function searchResult(ctype) {

    //     //const urlStr = window.location.href;
    

    //     // if (urlStr.match(/com/)) {
    //     //     return <List ctype="comics" searchValue={searchValue}/>;
    //     // } else if (urlStr.match(/eve/)) {
    //     //     return <List ctype="events" searchValue={searchValue}/>
    //     // } else {
    //     //     return <List ctype="characters" searchValue={searchValue}/>;
    //     // }
    // }

    return (
        <div className='App'>
            <Header/>
            <Router>
                <Navbar bg="dark" variant="dark" id="myNav">
                    <Navbar.Brand>Search
                    </Navbar.Brand>
                    
                        <Form
                            action="/"
                            method="get"
                            autoComplete="off"
                            onSubmit={submitHandler}
                            >
                            <FormControl
                                type="text"
                                id="search"
                                onKeyUp={(key) => handleKeyPress(key)}
                                placeholder="Search"
                                className="mr-sm-2"/>
                        </Form>
                        <Nav className="mr-auto">
                    {/* <div class="linkDiv"> */}
                        <Link
                            className="linkies active"
                            to=
                            {PUBLIC_URL+"/characters"}
                            id="characters"
                            onClick={handleClick}>
                            Characters
                        </Link>
                        <Link
                            className="linkies"
                            onClick={handleClick}
                            to={PUBLIC_URL + "/comics"}
                            id="comics">
                            Comics
                        </Link>
                        <Link
                            className="linkies"
                            onClick={handleClick}
                            to={PUBLIC_URL + "/events?search=" + searchValue}
                            id="events">
                            Events
                        </Link>
                        {/* </div> */}
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path={PUBLIC_URL + "/characters"}>
                        <List ctype="characters" searchValue={searchValue}/>
                    </Route>
                    <Route exact path={PUBLIC_URL + "/comics"}>

                        <List ctype="comics" searchValue={searchValue}/>
                    </Route>
                    <Route exact path={PUBLIC_URL + "/events"}>
                        <List ctype="events" searchValue={searchValue}/>
                    </Route>
                    <Route path={PUBLIC_URL + "/char"}>
                        <Character/>
                    </Route>
                    <Route path={PUBLIC_URL + "/com"}>
                        <Comic/>
                    </Route>
                    <Route path={PUBLIC_URL + "/eve"}>
                        <Event/>
                    </Route>
                    <Route exact path={PUBLIC_URL + "/"}>
                        <List ctype="characters" searchValue={searchValue}/>
                    </Route>
                </Switch>
            </Router>
            {}
            <Footer/>
        </div>
    );
}

export default App;