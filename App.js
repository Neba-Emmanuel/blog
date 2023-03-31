import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation, route }) => ({
            headerTitle: "Blogs",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather
                  name="plus"
                  size={30}
                  color="black"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{ title: "Blog Details" }}
        />

        <Stack.Screen 
          name="Create" 
          component={CreateScreen} 
          options={{ title: "Write Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomApp = App;

export default () => {
  return (
    <Provider>
      <CustomApp />
    </Provider>
  );
};
