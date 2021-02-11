import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Header } from 'react-native-elements';

const MyHeader = () => {
    return (<Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      containerStyle={{backgroundColor:'#121212'}}
    />);
}

const style = StyleSheet.create({

})


export default MyHeader;
