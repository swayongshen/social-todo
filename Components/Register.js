import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Environment from '../Environment';
import MyHeader from './MyHeader';
import deviceStorage from '../storage'; 
import axios from 'axios';
import {sendRegisterPostRequest} from '../auth';
import { AppContext } from '../App';




const Register = ({navigation}) => {
    const { control, handleSubmit, errors } = useForm();
    const defaultErrorMsg = "Please check that all fields are correct."
    const [errorMsgContent, setErrorMsgContent] = useState(defaultErrorMsg);
    const [isError, setIsError] = useState(false);
    const state = useContext(AppContext);
    const setLoginState = state.setLoginState;

    
    const registerUser = async (formData) => {
    
        const { firstName, lastName, email, password, confirmPassword } = formData;

        //Check if 2 passwords are the same.
        if (password != confirmPassword) {
            setErrorMsgContent("Confirmation password does not match password.");
            return 0;
        }
    
        const user = {firstName, lastName, email, password};

        try {
            const userToken = await sendRegisterPostRequest(user);
            await deviceStorage.saveItem("id_token", userToken);
            setLoginState({isLoggedIn: true, token:userToken});
            navigation.navigate('Home');
            //Add message that registration was successful.
        } catch (error) {
            console.error(error);
            setErrorMsgContent(() => error.message);
            setIsError(true);
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
        rules={{ required: true}}
        defaultValue=""
    />)
    const defaultErrorCondition = errors.firstName || errors.lastName || errors.email || errors.password || errors.confirmPassword;
    const errorMsg = defaultErrorCondition || isError && <View style={{bottom:40}}><Text style={style.errorMsg}>{errorMsgContent}</Text></View>
    return (
    <View style={{flex:1}}>
        <MyHeader navigation={navigation} type="register" style={{flex:1}}/>
        <View style={{flex:1}}/>
            <View style={style.inputGroup}>
                {errorMsg}
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingRight: 70}}>
                    <Text>First name   </Text>
                    {inputField("firstName", "e.g. John Doe")}
                </View>
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingTop:5, paddingRight: 70}}>
                    <Text>Last name   </Text>
                    {inputField("lastName", "")}
                </View>
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingTop:5, paddingRight: 70}}>
                    <Text>Email           </Text>
                    {inputField("email", "")}
                </View>
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingTop:5, paddingRight: 70}}>
                    <Text>Password   </Text>
                    {inputField("password", "", true)}
                </View>
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingTop:5, paddingRight: 70}}>
                    <Text>Confirm {'\n'}Password   </Text>
                    {inputField("confirmPassword", "", true)}
                </View>
                <View style={{paddingTop: 40}}></View>
                <Button title="Register" color='#121212'onPress={handleSubmit(registerUser)}/>
            </View>
    </View>)
}

const style = StyleSheet.create({
    inputGroup: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    inputField: {
        borderRadius: 5,
        borderWidth: 2,
        width: 200
    },

    registerButton: {
        backgroundColor: '#ebe4e4',
        borderRadius: 15,
        minWidth: 70,
        minHeight: 30,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    errorMsg: {
        color:'red'
    }
})

export default Register;