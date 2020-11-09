import React from 'react';
import ListItem from './listItem';

class List extends React.Component {
    render() {
        return (
            <div>
                { this.props.results.map((card, index) => < ListItem card={card} key={index} />) }
            </div>
        );
    }
}
export default List;