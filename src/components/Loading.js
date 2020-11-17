import Spinner from 'react-bootstrap/Spinner';

function Loading () {

    return (
        <div className ="text-center margin-top margin-bottom">
            <Spinner animation="grow" variant = "light" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="grow" variant = "light" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <Spinner animation="grow" variant = "light" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner></div>
    );
}

export default Loading;

