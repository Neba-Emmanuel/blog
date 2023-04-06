import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

// const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () =>{
    const response = await jsonServer.get('/blogposts');

    dispatch({type: 'get_blogposts', payload: response.data});
  }
}

const addBlogPosts = (dispatch) => {
  return  async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title, content});

    const response = await jsonServer.get('/blogposts');

    dispatch({type: 'get_blogposts', payload: response.data});
    // dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
        callback();
      }
  };
  // Preferable when dealing with apis
  // return async (title, content, callback) => {
  //     try{
  //         await axios.post('blogpost', title, content)
  //         dispatch({type: 'add_blogpost', payload: {title, content}});
  //         callback();
  //     }
  //     catch(e){

  //     }
  // }
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content});

    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
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
