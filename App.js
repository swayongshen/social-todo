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

import MyHeader from './Components/MyHeader';
import List from './Components/List';



//Line break component
const Br = () => <Text>{'\n'}</Text>;

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
    };

    return (
        <AppContext.Provider value={state}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#121212" />
            <SafeAreaView>
                <View>
                    {/* Hermes is a javascript engine optimised to run on Android */}
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <MyHeader setAddTaskModal={setAddTaskModal}/>
                    <Br />
                    <View>
                        <List tasks={tasks}/>
                    </View>
                </View>
                {addTaskModal}
                <View style={styles.bottomView}>{deleteModal}</View>
            </SafeAreaView>
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
