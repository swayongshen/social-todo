import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const MyHeader = ({showMenu, setShowMenu}) => {
  return (<Header
    leftComponent={showMenu 
      ? 
        <Icon.Button
          name="menu-unfold"
          backgroundColor="#121212"
          color="white"
          onPress={() => {
            setShowMenu(() => false);
          }}/>
      :
        <Icon.Button 
          name="menu-fold"
          backgroundColor="#121212"
          color="white"
          onPress={() => {
            setShowMenu(() => true)}}/>
    }
    centerComponent={ <Text style={style.title}>Social To Do</Text> }
    containerStyle={style.header}
  />);
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#121212',
    justifyContent: "space-around"
  },

  title: {
    color:"white",
    fontFamily:"sans-serif",
    fontSize:24
  }
})


export default MyHeader;
