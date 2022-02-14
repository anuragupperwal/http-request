import BlogLists from './components/BlogLists/BlogLists';
// import {useState, useEffect} from 'react';
import useFetch from './components/useFetch/useFetch';

function Home() {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    // const HandleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div >
            {isLoading && <div>Loading... </div>}
            {error && <div>{error} </div> }
            {blogs && <BlogLists blogs={blogs} title='All blogs'/>}
            {/* <Blog blogs={blogs.filter((blog) => blog.author==='notMe')} title='Not my blogs' HandleDelete={HandleDelete}/> */}
        </div>
    )
}

export default Home;