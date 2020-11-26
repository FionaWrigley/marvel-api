
import md5 from 'md5';

const curr_date = new Date();
const {REACT_APP_APIKEY, REACT_APP_APIPKEY} = process.env;
const time_stamp = curr_date.getTime();

export function GetCredentials(){

    let hashkey= md5(time_stamp+REACT_APP_APIPKEY+REACT_APP_APIKEY);
    const credentials = "?ts="+time_stamp+"&apikey="+REACT_APP_APIKEY+"&hash="+hashkey;

    return credentials;
}