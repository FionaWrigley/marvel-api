
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// const curr_date = new Date();
const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
const {REACT_APP_APIKEY} = process.env;
const time_stamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/";

export async function fetchData (ctype, searchValue, marvelData, setMarvelData){

    console.log("in dataFetch");
    console.log(url);
    console.log(ctype);

   

            const data2 = await axios.get(url + ctype, {
                params: Object.assign({
                    apikey: REACT_APP_APIKEY,
                    ts: time_stamp,
                    hash: hashish
                }, (ctype === 'characters'
                    ? (searchValue !== ""
                        ? {
                            nameStartsWith: searchValue
                        }
                        : "")
                    : (searchValue !== ""
                        ? {
                            titleStartsWith: searchValue
                        }
                        : "")))
            }).then((response) => {
                         console.log(response.data.data.results)
                         console.log("response tracking///////////////////")
                         return (response.data.data.results)
                })
           
                .catch(function (err) {
                    console.log('error tracking///////////////////////////')
                    console.log(err);
                })
                console.log('99999999999999999999999999');
                console.log(data2);
}

// function DataFetch(){

//     axios.get(url + this.state.ctype, {
//         params: Object.assign({
//             apikey: api_key,
//             ts: time_stamp,
//             hash: hashish
//         }, (this.state.ctype === 'characters'
//             ? (searchInput != ""
//                 ? {
//                     nameStartsWith: searchInput
//                 }
//                 : "")
//             : (searchInput != ""
//                 ? {
//                     titleStartsWith: searchInput
//                 }
//                 : "")))
//     }).then((response) => {
//         console.log(response)
//         console.log("response tracking")
//         this.setState({marvelData: response.data.data.results, isLoading: false});
//     })
//         .catch(function (err) {
//             console.log('error tracking')
//             console.log(err);
//         });
// }
//     return marvelData;
// }