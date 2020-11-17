import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom'

class ListItem extends React.Component {

    render() {
        const metaData = this.props.card;
        const {id, name, title, thumbnail} = metaData;
        const {PUBLIC_URL} = process.env;

        return (

            <Link className = "card-width-15"
                to= {(title)
                ? ((metaData.comics) ? (PUBLIC_URL + "/eve?id=" + id)
                : (PUBLIC_URL+"/com?id=" + id))
                : (PUBLIC_URL+"/char?id=" + id) 
                }>
                <Card 
                    variant="warning"
                    border="none"
                    className="text-center bg-transparent">  
                        <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`}/>
                        <Card.Body>
                            <Card.Title>{(name)
                                    ? name
                                    : title}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
        )
    }
}
export default ListItem;