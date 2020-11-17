import ListItem from './ListItem';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";
import Loading from './Loading';

// // const curr_date = new Date();
const hashish = "6e039380a3a1af6ca5845c27fdf089a6";
const {REACT_APP_APIKEY} = process.env;
const time_stamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/";

const List = ({ctype, handleClick}) => {

    const searchValue = useLocation()
        .search
        .replace('?search=', '');
    console.log(searchValue);

    const [marvelData,
        setMarvelData] = useState([]);
    const [ready, setReady] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorMessage, setErrorMessage] = useState('No results found');

    useEffect(() => {
        axios.get(url + ctype, {
            params: Object.assign({
                apikey: REACT_APP_APIKEY,
                ts: time_stamp,
                hash: hashish
            }, (ctype === 'comics'
                ? (searchValue !== ""
                    ? {
                        titleStartsWith: searchValue
                    }
                    : "")
                : (searchValue !== ""
                    ? {
                        nameStartsWith: searchValue
                    }
                    : "")))
        }).then((response) => {
            console.log(response)
            setMarvelData(response.data.data.results)
            setReady(true);
        })
            .catch(function (err) {
                console.log('error tracking')
                console.log(err);
                setErrorMessage("An unexpected error occured");
                setErrorFlag(true);
                console.log("errorMessage: "+errorMessage);
            });
    }, [ctype, searchValue]);


    return (
        (ready) ? ( (marvelData.length > 0 ) ? (
        <div className="resultGrid">
            {marvelData.map((card, index) => <ListItem
                card={card}
                key={index}
                handleClick={(metaData) => handleClick(metaData)}/>)}
        </div>) : (<div className = "card custom-card">{errorMessage}</div>))
        : ((errorFlag) ? (<div className = "card custom-card">{errorMessage}</div>)
        : (<Loading />))
    );
}

export default List;