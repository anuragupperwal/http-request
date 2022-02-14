import { useState } from "react";
import { useHistory } from 'react-router-dom';

import './Create.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor ] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, author, body };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Added");
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog.</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type= "text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body</label>
                <textarea type= "text" required value={body} onChange={(e) => setBody(e.target.value)}> </textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="notMe">notMe</option>
                    <option value="stillNotMe">stillNotMe</option>
                    <option value="Me">Me</option>
                    <option value="againNotMe">againNotMe</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Loading...</button> }

                <p className="create-display"> {title}</p>
                <p className="create-display"> {author}</p>
                <p className="create-display">{body}</p> 
            </form>
        </div>
    );
}

export default Create;