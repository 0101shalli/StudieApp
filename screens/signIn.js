import React from 'react';
import {TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Button1 from "../components/Button1"
export default SignIn = () =>{
  return(

    <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
    <Text> Welcome </Text>
    </View>
    <View>
    <Text style={styles.inpuTex}>Email:</Text>
    <TextInput style={styles.inpu}></TextInput>
    <Text style={styles.inpuTex}>Password:</Text>
    <TextInput style={styles.inpu}></TextInput>
    </View>
    <Button1 title="Submit" style={{margin:30, }}/>
    </View>
  );
}


const styles = StyleSheet.create({
  inpuTex:{
    textAlign:'center',
    justifyContent:'center',
    fontSize:25,
    textAlign:'center',
    alignSelf:'center',


  },
  inpu:{
    backgroundColor:"rgba(108,169,146,6)",
    borderRadius:15,
    elevation:10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:300
  },

}
)
