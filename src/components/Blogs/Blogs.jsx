import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6




const Blogs = ({handleAddToBookmarks, handleAddToTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    return (
        <div className="md:w-2/3">
           
           {
            blogs.map((blog, idx) => <Blog key={idx} handleAddToBookmarks={handleAddToBookmarks} handleAddToTime={handleAddToTime} blog={blog}></Blog>)
           }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleAddToTime: PropTypes.func
}

export default Blogs;