import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import './App.css';



const char_url = "https://gateway.marvel.com:443/v1/public/characters?apikey=9d05ce6e21991600d98e5945c00379bc&ts=1&hash=6e039380a3a1af6ca5845c27fdf089a6";



function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
    //console.log("HERE!!!!!!!!" + response.json());
  return response.json();
}

async function fetchData(url) {
    fetch(url)// { Params: {
     // params: Object.assign({
          // apikey: "4f47f803daa3f1a7473b5726c6d830f6",
          // ts: "1",
          // hash: "137f555f5010a03f317ea7bfc5ee3c7a"}})

      //})})
      .then(validateResponse)
      .then(readResponseAsJSON)
      .then(logResult)
      .catch(logError);
}

 fetchData(char_url);

 //black widow
 //https://gateway.marvel.com:443/v1/public/characters/1009189?
// captain marvel, 1009261
// wanda maximoff, 1009562
// black widow, 1009189

// Request Url: http://gateway.marvel.com/v1/public/comics
// Request Method: GET
// Params: {
//   "apikey": "your api key",
//   "ts": "a timestamp",
//   "hash": "your hash"
// }
// Headers: {
//   Accept: */*
// }

//  export default class FetchFromAPI extends React.Component{
//      state = {
//          loading: true
//      };

//      async componentDidMount() {

//          const url = "https://gateway.marvel.com:443/v1/public/characters?name=Thor&apikey=9d05ce6e21991600d98e5945c00379bc";
//          const response = await fetch(url);
//          const data = await response.json();
//          console.log(data);
//      }

//     render() {
//         return (
//             <div>
//                 {this.state.loading
//                     ? 'loading...'
//                     : 'api data...'}
//             </div>

//         );
//     }
//  }

const data = { 
  results: [
  {
    id: 77814,
    digitalId: 0,
    title: "Deadpool (2019) #8",
    issueNumber: 8,
    variantDescription: "",
    "description": null,
    "modified": "2020-02-01T09:02:50-0500",
    "isbn": "",
    "upc": "75960609575900811",
    "diamondCode": "APR201040",
    "ean": "",
    "issn": "2642-9942",
    "format": "Comic",
    "pageCount": 32,
    "textObjects": [],
    "resourceURI": "http://gateway.marvel.com/v1/public/comics/77814",
    "urls": [
      {
        "type": "detail",
        "url": "http://marvel.com/comics/issue/77814/deadpool_2019_8?utm_campaign=apiRef&utm_source=9d05ce6e21991600d98e5945c00379bc"
      }
    ],
    "series": {
      "resourceURI": "http://gateway.marvel.com/v1/public/series/27838",
      "name": "Deadpool (2019 - 2020)"
    },
    "variants": [],
    "collections": [],
    "collectedIssues": [],
    "dates": [
      {
        "type": "onsaleDate",
        "date": "2020-11-04T00:00:00-0500"
      },
      {
        "type": "focDate",
        "date": "2020-10-12T00:00:00-0400"
      }
    ],
    "prices": [
      {
        "type": "printPrice",
        "price": 3.99
      }
    ],
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/5f4faf587f890",
      "extension": "jpg"
    },
    "images": [
      {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/5f4faf587f890",
        "extension": "jpg"
      }
    ],
    "creators": {
      "available": 7,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/77814/creators",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/232",
          "name": "Chris Bachalo",
          "role": "penciler (cover)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
          "name": "Vc Joe Sabino",
          "role": "letterer"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/12369",
          "name": "Gerardo Sandoval",
          "role": "inker"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/13449",
          "name": "Chris Sotomayor",
          "role": "colorist"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/11921",
          "name": "Jacob Thomas",
          "role": "editor"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/12714",
          "name": "Kelly Thompson",
          "role": "writer"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/427",
          "name": "Tim Townsend",
          "role": "inker (cover)"
        }
      ],
      "returned": 7
    },
    "characters": {
      "available": 2,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/77814/characters",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
          "name": "Deadpool"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010701",
          "name": "Elsa Bloodstone"
        }
      ],
      "returned": 2
    },
    "stories": {
      "available": 2,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/77814/stories",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/172596",
          "name": "cover from Deadpool (2019) #8",
          "type": "cover"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/172597",
          "name": "story from Deadpool (2019) #8",
          "type": "interiorStory"
        }
      ],
      "returned": 2
    },
    "events": {
      "available": 0,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/77814/events",
      "items": [],
      "returned": 0
    }
  }
]

}
class App extends Component {
  render () {
    const {thumbnail} = data.results[0];
    return (
        <div className='App'>
          <Header />
          {/* <h1>{data.results[0].title}</h1> */}
          {/* <img src={`${thumbnail.path}.${thumbnail.extension}`} /> */}
        </div>
    );
  }
}

export default App;