import React from 'react';
import { Text, View } from 'react-native'
import MyHeader from './MyHeader';

const Login = ({navigation}) => {
    return (
    <View>
        <MyHeader navigation={navigation}/>
        <Text>Login!</Text>
    </View>)
}

export default Login;