import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import AddTaskButton from './AddTaskButton';

const MyHeader = ({addTask}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (<Header
    leftComponent={showMenu 
      ? 
        <Icon.Button
          name="menu-unfold"
          backgroundColor="#121212"
          color="white"
          style={style.button}
          onPress={() => {
            setShowMenu(() => false);
          }}/>
      :
        <Icon.Button 
          name="menu-fold"
          backgroundColor="#121212"
          color="white"
          style={style.button}
          onPress={() => {
            setShowMenu(() => true)}}/>
    }
    centerComponent={ <Text style={style.title}>Social To Do</Text> }
    rightComponent={ <AddTaskButton addTask={addTask}/>}
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
    fontSize:24,
    paddingTop:5,
    paddingBottom:0
  },

  button: {
    paddingTop:12,
    paddingBottom:0
  }
})


export default MyHeader;
