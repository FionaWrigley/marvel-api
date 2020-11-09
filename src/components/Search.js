import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import axios from 'axios';
import List from './list';

const url = "https://gateway.marvel.com:443/v1/public/"
const char_url = "https://gateway.marvel.com:443/v1/public/characters?apikey=9d05ce6e21991600d98e5" +
        "945c00379bc&ts=1&hash=6e039380a3a1af6ca5845c27fdf089a6";

        // https://gateway.marvel.com/v1/public/characters?&apikey=9d05ce6e21991600d98e5945c00379bc&ts=1&hash=7e2bff76f1dc639652508d49739b83a6d31873a4&nameStartsWith=hulk
const api_key = "9d05ce6e21991600d98e5945c00379bc";
const p_key = "6e039380a3a1af6ca5845c27fdf089a6";
const time_stamp = 1;
//const ctype = "characters?";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: "deadpool",
            ctype: "characters", 
            buttonPress: "",
            marvelData: [],
            isLoading: true,
        };
        console.log("constructor: "+this.state.searchInput)
    }

    setSearchValue(s){ 
        console.log("s: " +s);
         this.setState({searchInput: s});
         console.log("this.searchInput: "+this.state.searchInput);
     };
     handleKeyPress(event) {
        if (event.key == "Enter") {
            console.log("call the api");
            this.getAPIData(this.state.ctype, event.target.value);
        }
     }

     
     



     getAPIData(ctype, searchInput){
        // axios
        // .get(char_url)
        // .then((response) => {
        //     console.log(response)
        //     this.setState({marvelData: response.data.data.results, isLoading: false});
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })

        axios.get(url+ctype, {
            params: Object.assign({
                apikey: api_key,
                ts: time_stamp,
                hash: p_key,
                nameStartsWith: searchInput
        }
        //searchInput !== '' ? { nameStartsWith: searchInput } : null
      )
    }).then((response) => {
            console.log(response)
            this.setState({marvelData: response.data.data.results, isLoading: false});
        })
        .catch(function (err) {
            console.log(err);
        })


  }
     


    render(){
    return (
        <div>
                <Label for="Search Characters">Search</Label>
                <Input
                    type="search"
                    name="search"
                    id="Search"
                    placeholder= {"search characters " + this.state.searchInput} 
                    onChange={(ev) => this.setSearchValue(ev.target.value)}
                     onKeyUp={this.handleKeyPress.bind(this)} 
                    />

            <div><List results={this.state.marvelData}/></div>
            
            </div>
    )
    };
}
export default Search;