import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather} from '@expo/vector-icons'

const IndexScreen = () => {
// const blogpost = useContext(BlogContext);
const {state, addBlogPosts} = useContext(Context);

    return(
        <View>
            <Button title='Add Post' onPress={() => addBlogPosts()}/>
            <FlatList
                data={state}
                keyExtractor={(blogpost) => blogpost.title}
                renderItem={({item}) => {
                    return ( 
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Feather name="trash" style={styles.icon}/>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
},
title:{
    fontSize: 18,
},
icon:{
    fontSize: 24,
}
});

export default IndexScreen;