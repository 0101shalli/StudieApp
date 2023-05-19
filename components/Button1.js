import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
const Button1 =({onPress,title}) =>(
  <TouchableOpacity onPress={onPress} style = {styles.btn1}>
  <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  btn1: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:300
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})
export default Button1;
