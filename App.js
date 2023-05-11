import { StatusBar } from 'expo-status-bar';
import React from "react";
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Index from "./screens/index";
import SignIn from "./screens/signIn";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
