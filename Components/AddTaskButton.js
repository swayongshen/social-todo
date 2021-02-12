import React from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const AddTaskButton = ({addTask}) => {
    return (
        <Icon.Button
            name="plus"
            backgroundColor="#121212"
            color="white"
            style={style.button}
            onPress={() => addTask()}
        />
    );
}

const style = StyleSheet.create({
    button: {
        paddingTop:14,
        paddingBottom:0,
    }
})

export default AddTaskButton;