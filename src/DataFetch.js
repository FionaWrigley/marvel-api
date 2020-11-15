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