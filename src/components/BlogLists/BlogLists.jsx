import './BlogLists.css';

import { Link } from 'react-router-dom';

function BlogLists(props) {

    return (
        <div>
            <h1>{props.title}</h1>
            {props.blogs.map((blog) => (
                <div key = {blog.id} className='card'>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>written by {blog.author}</p>
                    </Link> 
                </div>
            ))}
        </div>
    );
}

export default BlogLists;