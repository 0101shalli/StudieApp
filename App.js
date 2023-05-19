import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Index from "./screens/index";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName = 'splash'>
        <Stack.Screen name="splash" component={Index} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
