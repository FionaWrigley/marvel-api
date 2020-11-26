import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import Loading from './Loading';
import {GetCredentials} from './GetCredentials';

const {REACT_APP_URL} = process.env;

const List = ({ctype, searchValue, handleCardClick}) => {

    const searchVal = searchValue;

    const [marvelData,
        setMarvelData] = useState([]);
    const [ready,
        setReady] = useState(false);
    const [errorFlag,
        setErrorFlag] = useState(false);
    const [errorMessage,
        setErrorMessage] = useState('No results found');

    useEffect(() => {
        axios.get(REACT_APP_URL + ctype + GetCredentials(), {
            params: Object.assign((ctype === 'comics'
                ? (searchVal !== ""
                    ? {
                        titleStartsWith: searchVal
                    }
                    : "")
                : (searchVal !== ""
                    ? {
                        nameStartsWith: searchVal
                    }
                    : "")))
        }).then((response) => {
            setMarvelData(response.data.data.results)
            setReady(true);
        })
            .catch(function (err) {
                console.log(err);
                setErrorMessage("An unexpected error occured");
                setErrorFlag(true);
            });
    }, [ctype, searchVal]);

    return ((ready)
        ? ((marvelData.length > 0)
            ? (
                <div className="resultGrid">
                    {marvelData.map((card, index) => <ListItem card={card} key={index} handleCardClick={handleCardClick}/>)}
                </div>
            )
            : (
                <div className="card custom-card">{errorMessage}</div>
            ))
        : ((errorFlag)
            ? (
                <div className="card custom-card">{errorMessage}</div>
            )
            : (<Loading/>)));
}
export default List;
