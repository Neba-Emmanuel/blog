import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{title: 'Home Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomApp = App;

export default () =>{
  return <Provider>
    <CustomApp/>
  </Provider>
}