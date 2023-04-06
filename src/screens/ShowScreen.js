import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === route.params.id
  );

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

// ShowScreen.setOptions = ({ navigation }) => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Edit', { id: navigation.getParam('id') })
//         }
//       >
//         <EvilIcons name="pencil" size={35} />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  title:{
    marginTop: 20,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 600
  },
  content:{
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
  }
});

export default ShowScreen;
