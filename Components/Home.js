import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';

import MyHeader from './MyHeader';
import List from './List';

import { AppContext } from '../App';

//Line break component
const Br = () => <Text>{'\n'}</Text>;

const Home = () => {
    const state = useContext(AppContext);

    /** Used to display add task dialogue when add button is pressed. */
    const [addTaskModal, setAddTaskModal] = useState(null);
    
    return (
    <View>
        <MyHeader setAddTaskModal={setAddTaskModal} />
        <Br />
        <View>
            <List tasks={state.tasks} />
        </View>
        {addTaskModal}
        <View>{state.deleteModal}</View>
    </View>);
}

export default Home;