import React,{useReducer} from "react";
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();
const blogReducer = (state, action) =>{
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
}
const addBlogPosts = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'})
    }
}


export const {Context, Provider} = createDataContext(blogReducer, {addBlogPosts}, []);
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