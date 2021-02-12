/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';

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
import DeleteTask from './Components/DeleteTask';
import AddTaskModal from './Components/AddTaskModal';


//Line break component
const Br = () => <Text>{'\n'}</Text>;

//Temporary hardcode list items
const data = [
    { id: 1, isDone: false, description: "Boo" },
    { id: 2, isDone: true, description: "Bam" }
]

export const ListContext = React.createContext();

const App: () => React$Node = () => {

    /** State variable to maintain the list of tasks. */
    const [tasks, setTasks] = useState(data)

    /** Used to display the delete task confirmation when user long presses a task. */
    const [deleteModal, setDeleteModal] = useState(null);
    const showDeleteTask = (id) => {
        setDeleteModal(() => {
            return <DeleteTask id={id} hideDeleteTask={hideDeleteTask}/>
        });
    }
    const hideDeleteTask = () => setDeleteModal(() => null);

    /** Used to display add task dialogue when add button is pressed. */
    const [showAddTask, setShowAddTask] = useState(false);

    /** State to be passed as context */
    const state = {
        showDeleteTask: showDeleteTask,
        hideDeleteTask: hideDeleteTask,
        setTasks: setTasks,
        tasks: tasks
    };

    return (
        <ListContext.Provider value={state}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#121212" />
            <SafeAreaView>
                <View>
                    {/* Hermes is a javascript engine optimised to run on Android */}
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <MyHeader addTask={() => setShowAddTask(() => true)}/>
                    <Br />
                    <View>
                        <List tasks={tasks}/>
                    </View>
                </View>
                <AddTaskModal showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
                <View style={styles.bottomView}>{deleteModal}</View>
            </SafeAreaView>
        </ListContext.Provider>
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
