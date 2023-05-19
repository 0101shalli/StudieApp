import React from 'react';
import {Views, Button, Text, StyleSheet}
import Icon from 'react-native-icons/FontAwesome';

const iconButton =({onPress, icon, title, backgroundColor})=>(
  <View style=Styles.btnContainer>
  <Icon.Button
    name={icon}
    backgroundColor={backgroundColor}
    onPress={onPress}
    style={style.newBtn}
    >
    <Text style={styles.newBtnText}>{title}</Text>
    </Icon.Button>
    </View>
);

const style = StyleSheet.create({
  newBtn:{
    padding:12,
  },
  newBtnText:{
    fontSize:17,
    paddingVertiacal (),
main
  },

})
