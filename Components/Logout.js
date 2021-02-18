import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import deviceStorage from '../storage'; 
import { AppContext } from '../App';

const Logout = ({navigation}) => {
    const state = useContext(AppContext);
    const setLoginState = state.setLoginState;

    useEffect(() => {
        try {
            deviceStorage.removeItem("token_id");
            setLoginState({isLoggedIn: false, token:null});
        } catch (error) {
        }
        navigation.navigate("Home");
    });
    return <View></View>
}

export default Logout;