import { Link } from 'react-router-dom';

function InvalidURL() {
    return (
        <div>
            <h1>Error 404</h1>
            <p>
                <Link to="/"> Go to home page</Link>
            </p>
        </div>
    );
}

export default InvalidURL;