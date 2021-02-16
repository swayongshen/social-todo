/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    SafeAreaView,
} from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import MyHeader from './Components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import LeftDrawer from './Components/LeftDrawer';


export const AppContext = React.createContext();

const App: () => React$Node = () => {

    //Temporary hardcode list items
    const data = [
        { id: 1, isDone: false, description: "Boo" },
        { id: 2, isDone: true, description: "Bam" }
    ]

    /** State variable to maintain the list of tasks. */
    const [tasks, setTasks] = useState(data)

    /** Used to display the delete task confirmation when user long presses a task. */
    const [deleteModal, setDeleteModal] = useState(null);

    /** Used to display add task dialogue when add button is pressed. */
    const [addTaskModal, setAddTaskModal] = useState(null);

    /** Should change to read from storage and see if logged in. */
    const [loginState, setLoginState] = useState({isLoggedIn: false, token: null});

    /** State to be passed as context */
    const state = {
        setTasks: setTasks,
        tasks: tasks,
        deleteModal: deleteModal,
        setDeleteModal: setDeleteModal,
        addTaskModal: addTaskModal,
        setAddTaskModal: setAddTaskModal,
        loginState: loginState,
        setLoginState: setLoginState
    };

    return (
        <SafeAreaProvider>
            <AppContext.Provider value={state}>
                <NavigationContainer>
                    <LeftDrawer />
                </NavigationContainer>
            </AppContext.Provider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    bottomView: {

    },
    scrollView: {
        // backgroundColor: Colors.lighter,
    },
});

export default App;
