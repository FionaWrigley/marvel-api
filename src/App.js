import React, {useState} from 'react';
import Header from './components/Header';
import Character from './components/Character';
import Comic from './components/Comic';
import './App.css';
import List from './components/List';
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const App = () => {

    // const [card,
    //     setCard] = useState([]);
    const [searchValue,
        setSearchValue] = useState('');

    function handleClick(metaData) {
        // setCard(metaData);
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

    // function getID(){
    //     let {id} = useParams();
    //     console.log("id: "+id);
    //     return (id);
    // }

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
                            {"/characters?search=" + searchValue}
                            id="characters">
                            Characters
                        </Link>
                        <Link className="linkies" to={"/comics?search=" + searchValue} id="comics">
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
                        <Character/>
                    </Route>
                    <Route exact path="/com/">
                        <Comic />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;