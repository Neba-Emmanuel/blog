import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const CreateScreen = ({ route, navigation }) => {

  const {addBlogPosts} = useContext(Context);

  return <BlogPostForm/>
};


const styles = StyleSheet.create({

});

export default CreateScreen;
