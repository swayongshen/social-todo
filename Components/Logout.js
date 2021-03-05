import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import deviceStorage from '../storage';
import { AppContext } from '../App';
import { Button } from 'react-native';
import Home from './Home';
import { logout } from '../auth';

const Logout = ({navigation}) => {
    const state = useContext(AppContext);
    const setLoginState = state.setLoginState;

    return (<View style={{flex : 1}}>
        <Modal 
            isVisible={true}
            backdropColor="white"
            onBackdropPress={() => navigation.goBack()}
            onBackButtonPress={() => navigation.goBack()}>
            <Text style={style.confirmText}>Confirm logout?</Text>
            <Button title="Logout" onPress={() => {
                logout();
                setLoginState({isLoggedIn:false, token:null});
                navigation.navigate("Home");
            }}/>
        </Modal>
    </View>)

}

const style = StyleSheet.create({
    confirmText: {
        alignSelf: 'center',
        paddingBottom: 10
    },

    modal: {
        backgroundColor: '#00000080',
        padding:20
    }
})

export default Logout;