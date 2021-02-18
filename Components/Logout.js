import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import deviceStorage from '../storage'; 

const Logout = ({navigation}) => {
    useEffect(() => {
        try {
            AsyncStorage.removeItem("token_id");
        } catch (error) {
            
        }
        navigation.navigate("Home");
    });
}

export default Logout;