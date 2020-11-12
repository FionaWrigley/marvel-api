import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

    render() {
        return (
            <div>
                { this.props.results.map((card, index) => < ListItem card={card} key={index} handleClick={(metaData) => this.props.handleClick(metaData)} 
             />) }
            </div>
        );
    }
}
export default List;