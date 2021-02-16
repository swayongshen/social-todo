import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import MyHeader from './MyHeader';

const Register = ({navigation}) => {
    const { control, handleSubmit, errors } = useForm();
    
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
    <View style={{flex:1}}>
        <MyHeader navigation={navigation} type="register" style={{flex:1}}/>
        <View style={{flex:1}}/>
            <View style={style.inputGroup}>
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingRight: 70}}>
                    <Text style={{justifyContent:'flex-end'}}>Username   </Text>
                    {inputField("username", "")}
                </View>
                <View style={{flex: 0, flexDirection:'row', alignItems:'center', paddingTop:10, paddingRight: 70}}>
                    <Text>Password   </Text>
                    {inputField("password", "", true)}
                </View>
                <View style={{paddingTop: 30}}></View>
                <TouchableHighlight style={style.registerButton}><Text>Register</Text></TouchableHighlight>
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
        borderRadius: 10,
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
    }
})

export default Register;