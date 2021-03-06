import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import deviceStorage from '../storage';
import { sendLoginPostRequest } from '../auth';
import { AppContext } from '../App';

import MyHeader from './MyHeader';


const Login = ({ navigation }) => {
    const { control, handleSubmit, errors } = useForm();
    const [isError, setIsError] = useState(false);
    const state = useContext(AppContext);
    const setLoginState = state.setLoginState;

    

    const handleLogin = async (formData) => {
        const {email, password} = formData;
        try {
            const token = await sendLoginPostRequest({email, password});
            await deviceStorage.saveItem("id_token", token);
            setLoginState({isLoggedIn: true, token:token});
            navigation.navigate("Home");
        } catch (error) {
            setIsError(true);
            console.error(error);
        }
    }

    /**
     * The text box field component for user to enter login.
     */
    const inputField = (name, placeholder, isPassword = false) => (<Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
            <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                autoCapitalize='none'
                placeholder={placeholder}
                secureTextEntry={isPassword}
                style={style.inputField}
            />
        )}
        name={name}
        rules={{ required: true }}
        defaultValue=""
    />)

    return (
        <View style={{flex: 1}}>
            <MyHeader navigation={navigation} type="login" style={{flex:1}}/>
            <View style={{flex:1}}/>
            <View style={style.inputGroup}>
                { isError && <Text style={style.errorMsg}>Error: Please check your credentials.</Text>}
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingLeft: 25, paddingRight: 70}}>
                    <Text style={{justifyContent:'flex-end'}}>Email   </Text>
                    {inputField("email", "")}
                </View>
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingTop:10, paddingRight: 70}}>
                    <Text>Password   </Text>
                    {inputField("password", "", true)}
                </View>
                <View style={{paddingTop: 30}}></View>
                <Icon.Button 
                    name = "login"
                    backgroundColor="#121212"
                    style={style.loginButton}
                    onPress={handleSubmit(handleLogin)}
                >Login</Icon.Button>
            </View>
        </View>)
}

const style = StyleSheet.create({
    errorMsg: {
        color:"red",
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputGroup: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    inputField: {
        borderRadius: 10,
        borderWidth: 2,
        width: 200
    },

    loginButton: {
        borderRadius: 10,
    }
})

export default Login;