import React, {Component} from 'react';
import axios from 'axios';
import Header from './header';
import './App.css';
import List from './list';
import { MDBCol, MDBInput } from "mdbreact";
// import {Data} from './data';

const char_url = "https://gateway.marvel.com:443/v1/public/characters?apikey=9d05ce6e21991600d98e5" +
        "945c00379bc&ts=1&hash=6e039380a3a1af6ca5845c27fdf089a6";
const test_url = "https://gateway.marvel.com:443/v1/public/characters?";
const api_key = "9d05ce6e21991600d98e5945c00379bc";
const time_stamp = 1;
const hash = "6e039380a3a1af6ca5845c27fdf089a6";
const curr_date = new Date();
const p_key = "7e2bff76f1dc639652508d49739b83a6d31873a4";
const charList = new Array;

// var characterList = new Array; function logResult(result) {
// console.log(result); } function logError(error) {     console.log('Looks like
// there was a problem: \n', error); } function validateResponse(response) {
// if (!response.ok) {         throw Error(response.statusText);     }
// return response; } function readResponseAsJSON(response) {
// //console.log("HERE!!!!!!!!" + response.json());     return response.json();
// } class FetchFromAPI extends React.Component {     state = {         loading:
// true     };     async componentDidMount() {         const response =
// axios.get(char_url);         // .then(validateResponse)
// .then(readResponseAsJSON) .then(logResult)         // .then(setCharacterList)
// .catch(logError); console.log(data); const charList =         //
// response.json();         const charList = (await response).data.data.results;
//         console.log(charList[0]);     };     render() {           const
// {thumbnail} = charList[0];         return (             <div className='App'>
//                 <Header/>  <h1>{charList[0].title}</h1>           <img
// src={`${thumbnail.path}.${thumbnail.extension}`} />             </div>
//  );     } }; const characterList = fetchData(char_url);
// console.log(characterList.json); function setCharacterList(results){
// characterList = results;  } async function getData(url){   axios.get(url,
// {params: Object.assign({     apikey: api_key,     ts: time_stamp,     hash:
// hash})})     //.then((characters) =>
// console.log(characters.data.data.results))     .then((characters) =>
// setCharacterList(characters.data.data.results)); } const characterList =
// getData (test_url); console.log("characterList: ");
// console.log(characterList); console.log(characters.data);
// console.log(axios.get(char_url)); black widow
// https://gateway.marvel.com:443/v1/public/characters/1009189? captain marvel,
// 1009261 wanda maximoff, 1009562 black widow, 1009189 Request Url:
// http://gateway.marvel.com/v1/public/comics Request Method: GET Params: {
// "apikey": "your api key",   "ts": "a timestamp",   "hash": "your hash" }
// Headers: {   Accept: */* } export default class FetchFromAPI extends
// React.Component{      state = {          loading: true      };      async
// componentDidMount() {          const url =
// "https://gateway.marvel.com:443/v1/public/characters?name=Thor&apikey=9d05ce6
// e 21991600d98e5945c00379bc";          const response = await fetch(url);
// const data = await response.json();          console.log(data);      }
// render() {         return (             <div> {this.state.loading         ?
// 'loading...'                     : 'api data...'} </div>         );     }  }

class App extends Component {

    state = {
        marvelData: [],
        isLoading: true
            };

    getData() {


        axios
            .get(char_url)
            .then((response) => {
              console.log(response)
              this.setState({
                  marvelData: response.data.data.results,
                  isLoading: false
                });
            })
            .catch(function (err) {
              console.log(err);
            })
    }

    componentDidMount() {
        this.getData();
    }
    // .then(validateResponse) .then(readResponseAsJSON) .then(logResult)         //
    // .then(setCharacterList) .catch(logError); console.log(data); const charList
    // =         // response.json();         const charList = (await
    // response).data.data.results;         console.log(charList[0]);     };

    render() {
      const {marvelData} = this.state;
        return (
            <div className='App'>
                <Header/>
                <List results={marvelData}/>
            </div>
        );
    }
}

export default App;