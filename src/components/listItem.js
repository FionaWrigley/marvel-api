import React, {Component} from 'react';
import '../App.css';


class ListItem extends React.Component {
    render() {
        const metaData = this.props.card;
        const {name, thumbnail} = metaData;

        return (
           <div>
               <div className = "listitem-class">{name}</div>
               <img className = 'thumbnails' src = {`${thumbnail.path}.${thumbnail.extension}`} />
           </div>

        );
    }
}
export default ListItem;
