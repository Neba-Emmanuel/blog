import React,{useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
const [blogPosts, setBlogPosts] = useState([]);

const addBlogPosts = () => {
    setBlogPosts([...blogPosts, {title:`Blog post #${blogPosts.length + 1}`}])
}

    // const blogPost = [
    //     {title: 'Blog post #1'},
    //     {title: 'Blog post #2'}
    // ];
    return <BlogContext.Provider value={{data: blogPosts, addBlogPosts: addBlogPosts}}>{children}</BlogContext.Provider>;
}

export default BlogContext;