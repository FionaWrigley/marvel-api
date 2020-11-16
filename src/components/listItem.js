import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom'

class ListItem extends React.Component {

    render() {
        const metaData = this.props.card;
        const {id, name, title, thumbnail} = metaData;
      
        return (
            <Card onClick= {() => this.props.handleClick(metaData)} variant="warning" className="text-center card-width-15">
                <Link to={(name)
                            ? "/char?cardObject=" + metaData
                            : "/com?cardObject=" + metaData}>
                    <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`}/>
                </Link>
                <Card.Body>
                    <Card.Title>{(name)
                            ? name
                            : title}
                    </Card.Title>
                </Card.Body>
            </Card>
        );
    }
}
export default ListItem;
