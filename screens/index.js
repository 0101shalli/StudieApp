import React from "react";
import { StyleSheet, Text, View, Button,Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Button1 from "../components/Button1";
import SignIn from "../screens/signIn";
import { createStackNavigator, createAppContainer } from 'react-navigation';


const Index =() => {
  return(
    <ScrollView>
      <Text style={{fontSize:30,textAlign:'center',top:200}}>Welcome to studie </Text>
      <Text style={{fontSize:20,textAlign:'center',top:230}}>Join us now </Text>
      <View style={styles.c1}>
        <Image source={
          require("../assets/images/depositphotos_41439295-stock-.jpg")
        }
        style={{height:230, width:230, marginTop:260}}
        />
      </View>
      <View style={styles.c1} >
        <Button1 title="Sign In" onPress={()=> this.props.navigation.navigate('signIn')} />
        <Text style={styles.c1}>Don't Have an account yet !</Text>
        <Button1 title="Sign Up"/>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  c1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },


})
export default Index;
