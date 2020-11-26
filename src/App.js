import React, {useState} from 'react';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
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
    const [enterPress,
        setEnterPress] = useState(false);

    const {PUBLIC_URL} = process.env;

    // ////////////////////////////////////////////////////////////////////////////
    // / ////////////////////////////////////////////////////////////////////////

    function submitHandler(e) {

        setSearchValue(document.getElementById('search').value);
        setEnterPress(true);
        e.preventDefault();
    }
    // /////////////////////////////////////////////////////////////////////////////
    // / //////////////////////////////////////////////////////////////////////////

    function handleLinkClick() {
        setSearchValue(document.getElementById('search').value);
    }

    function handleCardClick() {
        setEnterPress(false);
    }

    function getEvent() {

        if (enterPress === true) {
            return <List
                ctype="events"
                searchValue={searchValue}
                handleCardClick={handleCardClick}/>
        } else {
            return <Event/>
        }
    }

    function getChar() {
        if (enterPress === true) {
            return <List
                ctype="characters"
                searchValue={searchValue}
                handleCardClick={handleCardClick}/>
        } else {
            return <Character/>
        }
    }

    function getComic() {

        if (enterPress === true) {
            return <List
                ctype="comics"
                searchValue={searchValue}
                handleCardClick={handleCardClick}/>
        } else {
            return <Comic/>
        }
    }

    return (
        <div className='App'>
            <Header/>
            <Router>
                <Navbar bg="dark" variant="dark" id="myNav">
                    <Navbar.Brand>Search
                    </Navbar.Brand>
                    <Form action="/" method="get" autoComplete="off" onSubmit={submitHandler}>
                        <FormControl
                            type="text"
                            id="search"
                            placeholder="Search"
                            className="mr-sm-2"/>
                    </Form>
                    <Nav className="mr-auto">
                        <Link
                            className="linkies active"
                            to={PUBLIC_URL + "/characters"}
                            id="characters"
                            onClick={handleLinkClick}>
                            Characters
                        </Link>
                        <Link
                            className="linkies"
                            onClick={handleLinkClick}
                            to={PUBLIC_URL + "/comics"}
                            id="comics">
                            Comics
                        </Link>
                        <Link
                            className="linkies"
                            onClick={handleLinkClick}
                            to={PUBLIC_URL + "/events?search=" + searchValue}
                            id="events">
                            Events
                        </Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path={PUBLIC_URL + "/characters"}>
                        <List
                            ctype="characters"
                            searchValue={searchValue}
                            handleCardClick={handleCardClick}/>
                    </Route>
                    <Route exact path={PUBLIC_URL + "/comics"}>

                        <List
                            ctype="comics"
                            searchValue={searchValue}
                            handleCardClick={handleCardClick}/>
                    </Route>
                    <Route exact path={PUBLIC_URL + "/events"}>
                        <List
                            ctype="events"
                            searchValue={searchValue}
                            handleCardClick={handleCardClick}/>
                    </Route>
                    <Route path={PUBLIC_URL + "/char"}>
                        {getChar()}
                    </Route>
                    <Route path={PUBLIC_URL + "/com"}>
                        {getComic()}
                    </Route>
                    <Route path={PUBLIC_URL + "/eve"}>
                        {getEvent()}
                    </Route>
                    <Route exact path={PUBLIC_URL + "/"}>
                        <List
                            ctype="characters"
                            searchValue={searchValue}
                            handleCardClick={handleCardClick}/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}
export default App;