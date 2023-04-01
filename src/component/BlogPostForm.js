import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

const BlogPostForm = ({ route, navigation }) => {
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={{ marginHorizontal: 15 }}>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputStyle}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.inputStyle}
      />
      <Button title="Save Blog Post" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default BlogPostForm;
