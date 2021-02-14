import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import AddIcon from 'react-native-vector-icons/AntDesign';
import AddTaskModal from './AddTaskModal';
import { AppContext } from '../App';

const MyHeader = ({navigation, type}) => {
    const {setAddTaskModal} = useContext(AppContext);

    /** Show either open or fold menu button depending on whether menu is open. */
    const menuButton = <Icon.Button
        name="menu"
        backgroundColor="#121212"
        color="white"
        style={style.menuButton}
        size={24}
        onPress={() => navigation.toggleDrawer()}
    />

    const title = <Text style={style.title}>Social To Do</Text>

    const addTaskButton = <AddIcon.Button
        name="plus"
        backgroundColor="#121212"
        color="white"
        style={style.addButton}
        size={24}
        onPress={() => setAddTaskModal(() => <AddTaskModal setAddTaskModal={setAddTaskModal}/>)}
    />

    return (<Header
        leftComponent={ menuButton }
        centerComponent={ title }
        rightComponent={ type === "home" ? addTaskButton : null }
        containerStyle={style.header}
    />);
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#121212',
        justifyContent: "space-around",
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        color: "white",
        fontFamily: "sans-serif",
        fontSize: 20,
        paddingTop: 3,
        paddingBottom: 0
    },

    menuButton: {
        paddingTop: 4,
        paddingBottom: -3
    },

    addButton: {
        paddingTop:5,
        paddingBottom: -2
    }
})


export default MyHeader;
