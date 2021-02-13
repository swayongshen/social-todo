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

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import Home from './Components/Home';
import Login from './Components/Login';
import MyHeader from './Components/MyHeader';


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

    /** State to be passed as context */
    const state = {
        setTasks: setTasks,
        tasks: tasks,
        deleteModal: deleteModal,
        setDeleteModal: setDeleteModal,
        addTaskModal: addTaskModal
    };

    const Drawer = createDrawerNavigator();

    return (
        <AppContext.Provider value={state}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#121212" />
            <MyHeader setAddTaskModal={setAddTaskModal} />
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Login" component={Login} />
                </Drawer.Navigator>
            </NavigationContainer>
        </AppContext.Provider>

    );
};

const styles = StyleSheet.create({
    bottomView: {

    },
    scrollView: {
        // backgroundColor: Colors.lighter,
    },
    // engine: {
    //   position: 'absolute',
    //   right: 0,
    // },
    // body: {
    //   backgroundColor: Colors.white,
    // },
    // sectionContainer: {
    //   marginTop: 32,
    //   paddingHorizontal: 24,
    // },
    // sectionTitle: {
    //   fontSize: 24,
    //   fontWeight: '600',
    //   color: Colors.black,
    // },
    // sectionDescription: {
    //   marginTop: 8,
    //   fontSize: 18,
    //   fontWeight: '400',
    //   color: Colors.dark,
    // },
    // highlight: {
    //   fontWeight: '700',
    // },
    // footer: {
    //   color: Colors.dark,
    //   fontSize: 12,
    //   fontWeight: '600',
    //   padding: 4,
    //   paddingRight: 12,
    //   textAlign: 'right',
    // },
});

export default App;
