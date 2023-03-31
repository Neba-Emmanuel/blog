import React,{useReducer} from "react";
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();
const blogReducer = (state, action) =>{
    switch(action.type){
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
}
const addBlogPosts = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'});
    }
}
const deleteBlogPost = (dispatch) => {
    return id => {
        dispatch({type: 'delete_blogpost', payload: id});
    }
}


export const {Context, Provider} = createDataContext(blogReducer, {addBlogPosts, deleteBlogPost}, []);
/*
export const BlogProvider = ({children}) => {
const [blogPosts, dispatch] = useReducer(blogReducer, []);
const addBlogPosts = () => {
    dispatch({type: 'add_blogpost'})
}
// Using useState
// const addBlogPosts = () => {
//     setBlogPosts([...blogPosts, {title:`Blog post #${blogPosts.length + 1}`}])
// }
    return <BlogContext.Provider value={{data: blogPosts, addBlogPosts}}>{children}</BlogContext.Provider>;
}

export default BlogContext;*/