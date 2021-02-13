import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import AddIcon from 'react-native-vector-icons/AntDesign';
import AddTaskModal from './AddTaskModal';


const MyHeader = ({setAddTaskModal}) => {
    const [showMenu, setShowMenu] = useState(false);

    /** Show either open or fold menu button depending on whether menu is open. */
    const menuButton = <Icon.Button
        name={showMenu ? "menu-unfold" : "menu-fold"}
        backgroundColor="#121212"
        color="white"
        style={style.menuButton}
        onPress={() => {
            setShowMenu((currState) => !currState);
    }} />

    const title = <Text style={style.title}>Social To Do</Text>

    const addTaskButton = <AddIcon.Button
        name="plus"
        backgroundColor="#121212"
        color="white"
        style={style.addButton}
        onPress={() => setAddTaskModal(() => <AddTaskModal setAddTaskModal={setAddTaskModal}/>)}
    />

    return (<Header
        leftComponent={ menuButton }
        centerComponent={ title }
        rightComponent={ addTaskButton }
        containerStyle={style.header}
    />);
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#121212',
        justifyContent: "space-around"
    },

    title: {
        color: "white",
        fontFamily: "sans-serif",
        fontSize: 24,
        paddingTop: 5,
        paddingBottom: 0
    },

    menuButton: {
        paddingTop: 12,
        paddingBottom: 0
    },

    addButton: {
        paddingTop:14,
        paddingBottom:0,
    }
})


export default MyHeader;
