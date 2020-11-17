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

    function handleKeyPress(key) {
        setSearchValue(key.target.value);

        if (key.key === "Enter") {
            const urlStr = window.location.href;
            if (urlStr.match(/com/)) {
                window.location = "/iss4/comics?search=" + key.target.value;
            } else if (urlStr.match(/eve/)) {
                window.location = "/iss4/events?search=" + key.target.value;
            } else {
                window.location = "/iss4/characters?search=" + key.target.value;
            }
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

                        <Link
                            className="linkies active"
                            to=
                            {"/iss4/characters?search=" + searchValue}
                            id="characters">
                            Characters
                        </Link>
                        <Link className="linkies" to={"/iss4/comics?search=" + searchValue} id="comics">
                            Comics
                        </Link>
                        <Link className="linkies" to={"/iss4/events?search=" + searchValue} id="events">
                            Events
                        </Link>
                    </Nav>
                </Navbar>

                <Switch>
                    <Route exact path="/iss4/">
                        <List ctype="characters" searchValue={searchValue}/>
                    </Route>
                    <Route exact path="/iss4/characters">

                        <List ctype="characters" searchValue={searchValue}/>

                    </Route>
                    <Route exact path="/iss4/comics">
                        <List ctype="comics" searchValue={searchValue}/>
                    </Route>
                    <Route exact path="/iss4/events">
                        <List ctype="events" searchValue={searchValue}/>
                    </Route>
                    <Route exact path="/iss4/char">
                        <Character/>
                    </Route>
                    <Route exact path="/iss4/com">
                        <Comic/>
                    </Route>
                    <Route exact path="/iss4/eve">
                        <Event/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}
export default App;