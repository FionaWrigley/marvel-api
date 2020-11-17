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
    const {PUBLIC_URL} = process.env;

    function handleKeyPress(key) {
        setSearchValue(key.target.value);

        if (key.key === "Enter") {
            const urlStr = window.location.href;
            if (urlStr.match(/com/)) {
                window.location = PUBLIC_URL+"/comics?search=" + key.target.value;
            } else if (urlStr.match(/eve/)) {
                window.location = PUBLIC_URL+"/events?search=" + key.target.value;
            } else {
                window.location = PUBLIC_URL+"/characters?search=" + key.target.value;
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
                            {PUBLIC_URL+"/characters?search=" + searchValue}
                            id="characters">
                            Characters
                        </Link>
                        <Link className="linkies" to={PUBLIC_URL+"/comics?search=" + searchValue} id="comics">
                            Comics
                        </Link>
                        <Link className="linkies" to={PUBLIC_URL+"/events?search=" + searchValue} id="events">
                            Events
                        </Link>
                    </Nav>
                </Navbar>

                <Switch>
                    <Route exact path= {PUBLIC_URL+"/"}>
                        <List ctype="characters" searchValue={searchValue}/>
                    </Route>
                    <Route exact path={PUBLIC_URL+"/characters"}>

                        <List ctype="characters" searchValue={searchValue}/>

                    </Route>
                    <Route exact path={PUBLIC_URL+"/comics"}>
                        <List ctype="comics" searchValue={searchValue}/>
                    </Route>
                    <Route exact path={PUBLIC_URL+"/events"}>
                        <List ctype="events" searchValue={searchValue}/>
                    </Route>
                    <Route exact path={PUBLIC_URL+"/char"}>
                        <Character/>
                    </Route>
                    <Route exact path={PUBLIC_URL+"/com"}>
                        <Comic/>
                    </Route>
                    <Route exact path={PUBLIC_URL+"/eve"}>
                        <Event/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}
export default App;