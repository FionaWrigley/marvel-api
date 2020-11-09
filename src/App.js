import React, {Component} from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
//import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios';
import Header from './components/header';
import './App.css';
import List from './components/list';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {FormControl, Container, Row, Col} from 'react-bootstrap';



//import {MDBCol, MDBInput} from "mdbreact"; import {Data} from './data';

// const char_url = "https://gateway.marvel.com:443/v1/public/characters?apikey=9d05ce6e21991600d98e5" +
//         "945c00379bc&ts=1&hash=6e039380a3a1af6ca5845c27fdf089a6";
// const test_url = "https://gateway.marvel.com:443/v1/public/characters?";

const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
// const curr_date = new Date();
const api_key = "9d05ce6e21991600d98e5945c00379bc";
// const p_key = "7e2bff76f1dc639652508d49739b83a6d31873a4";
const time_stamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/"

//https://gateway.marvel.com/v1/public/characters?apikey=9d05ce6e21991600d98e5945c00379bc&ts=1&hash=6e039380a3a1af6ca5845c27fdf089a6&nameStartsWith=

class App extends Component {

    state = {
        marvelData: [],
        isLoading: true,
        ctype: "characters"
    };

    setCType(link){

        document.getElementById(this.state.ctype).classList.remove('active');
        document.getElementById(link).classList.add('active');

        this.setState({
            ctype: link
        }, () => {this.componentDidMount();});

    }

    handleKeyPress(key){
            console.log(key.key);
            if(key.key === "Enter"){
                this.componentDidMount();
            }
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////
     componentDidMount() {

        const searchInput = document.getElementById("search").value;

        axios.get(url+this.state.ctype, {
            params: Object.assign({
                apikey: api_key,
                ts: time_stamp,
                hash: hashish
        },
        (this.state.ctype === 'characters' ? { nameStartsWith: searchInput } : {titleStartsWith: searchInput})
      )
    }).then((response) => {
            console.log(response)
            this.setState({marvelData: response.data.data.results, isLoading: false});
        })
        .catch(function (err) {
            console.log(err);
        })
        this.render();
     }

/////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        const {marvelData} = this.state;
        return (

            <div className='App'>
                
             
        
                <Header/>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand>Search </Navbar.Brand>
                    <Nav className="mr-auto">

                    <Form inline>
                        <FormControl type="text" id="search" onKeyUp={(key)=>this.handleKeyPress(key)} placeholder="Search" className="mr-sm-2" />
                        {/* <Button variant="outline-info" onClick={()=>this.componentDidMount()}>Search</Button> */}
                    </Form>
                    <Nav.Link id ="characters" className = "active" onClick={()=>this.setCType("characters")}>Characters</Nav.Link>
                    <Nav.Link id ="comics" onClick={()=>this.setCType("comics")}>Comics</Nav.Link>
                    </Nav>
                </Navbar>
                <div><List results={this.state.marvelData}/></div>
                </div>
        )};
        }
        export default App;