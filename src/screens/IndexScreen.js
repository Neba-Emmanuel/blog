import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
// const blogpost = useContext(BlogContext);
const {data, addBlogPosts} = useContext(BlogContext);

    return(
        <View>
            <Text>Index</Text>
            <Button title='Add Post' onPress={() => addBlogPosts()}/>
            <FlatList
                data={data}
                keyExtractor={(blogpost) => blogpost.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default IndexScreen;