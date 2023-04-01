import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
    const {state} = useContext(Context);
    
    const { addBlogPosts } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === route.params.id
    );
  return (
    <BlogPostForm/>
  );
};

const styles = StyleSheet.create({
  
});

export default EditScreen;
