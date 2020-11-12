import React, {Component} from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Header from './components/Header';
import Character from './components/Character';
import Comic from './components/Comic';
import './App.css';
import List from './components/List';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Container,
    Row,
    Col
} from 'react-bootstrap';

// import {MDBCol, MDBInput} from "mdbreact"; import {Data} from './data'; const
// char_url =
// "https://gateway.marvel.com:443/v1/public/characters?apikey=9d05ce6e21991600d
// 9 8e5" +         "945c00379bc&ts=1&hash=6e039380a3a1af6ca5845c27fdf089a6";
// const test_url = "https://gateway.marvel.com:443/v1/public/characters?";

const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
// const curr_date = new Date();
const api_key = "9d05ce6e21991600d98e5945c00379bc";
// const p_key = "7e2bff76f1dc639652508d49739b83a6d31873a4";
const time_stamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/";

class App extends Component {

    state = {
        marvelData: [],
        isLoading: true,
        ctype: "characters",
        cardClicked: false,
        card: []
    };

    handleClick(metaData) {
        console.log("id: " + metaData);
        this.setState({cardClicked: true, card: metaData})
    }

    setCType(link) {

        document
            .getElementById(this.state.ctype)
            .classList
            .remove('active');
        document
            .getElementById(link)
            .classList
            .add('active');

        this.setState({
            ctype: link
        }, () => {
            this.componentDidMount(document.getElementById('search').value);
        });
    }

    handleKeyPress(key) {
        console.log("key value: " + key.key);
        console.log("key target value: " + key.target.value);

        if (key.key === "Enter") {
            console.log("key.target.value" + key.target.value);
            this.componentDidMount(key.target.value);
        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    // / ///////////////////////
    componentDidMount(searchVal) {

        const searchInput = searchVal;
        console.log(searchVal);
        //  const searchInput = document      .getElementById("search")      .value;
        console.log("search value in component did mount: " + searchInput);

        axios.get(url + this.state.ctype, {
            params: Object.assign({
                apikey: api_key,
                ts: time_stamp,
                hash: hashish
            }, (this.state.ctype === 'characters'
                ? (searchInput != ""
                    ? {
                        nameStartsWith: searchInput
                    }
                    : "")
                : (searchInput != ""
                    ? {
                        titleStartsWith: searchInput
                    }
                    : "")))
            // (this.state.ctype === 'characters' ? { nameStartsWith: searchInput } :
            // {titleStartsWith: searchInput}))
        }).then((response) => {
            console.log(response)
            console.log("response tracking")
            this.setState({marvelData: response.data.data.results, isLoading: false});
        })
            .catch(function (err) {
                console.log('error tracking')
                console.log(err);
            });
        this.render();
    }

    // /////////////////////////////////////////////////////////////////////////////
    // / /////////////////////

    render() {
        const {marvelData} = this.state;
        return (

            <div className='App'>

                <Header/>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Search
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Form inline>
                            <FormControl type="text" id="search" // value=""
                                onKeyUp={(key) => this.handleKeyPress(key)} placeholder="Search" className="mr-sm-2"/>
                        </Form>
                        <Nav.Link
                            id="characters"
                            className="active"
                            onClick={() => this.setCType("characters")}>Characters</Nav.Link>
                        <Nav.Link id="comics" onClick={() => this.setCType("comics")}>Comics</Nav.Link>
                    </Nav>
                </Navbar>
                <div>
                    {(this.state.cardClicked)
                        ? ((this.state.ctype === 'characters')
                            ? <Character character ={this.state.card}/>
                            : <Comic comic ={this.state.card}/>)
                        : <List
                            handleClick={(metaData) => this.handleClick(metaData)}
                            results={this.state.marvelData}/>}
                </div>
            </div>
        )
    };
}
export default App;