import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import ListItem from './ListItem';
import Loading from './Loading';
import { GetCredentials } from './GetCredentials';

const {REACT_APP_URL} = process.env;
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
        axios.get(REACT_APP_URL + ctype + GetCredentials(), {
            params: Object.assign(
            (ctype === 'comics'
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
                console.log(err);
                setErrorMessage("An unexpected error occured");
                setErrorFlag(true);
            });
    }, [ctype, searchValue]);


    return (
        (ready) ? ( (marvelData.length > 0 ) ? (
        <div className="resultGrid">
            {marvelData.map((card, index) => <ListItem
                card={card}
                key={index}
                />)}
        </div>) : (<div className = "card custom-card">{errorMessage}</div>))
        : ((errorFlag) ? (<div className = "card custom-card">{errorMessage}</div>)
        : (<Loading />))
    );
}
export default List;
