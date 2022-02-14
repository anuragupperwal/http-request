import { Link } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h2>Page Not Found!</h2>
            <Link to='/'>Go to the homepage.</Link>
        </div>
    )
}

export default PageNotFound;