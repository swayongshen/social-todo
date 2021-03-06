import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import MyHeader from './MyHeader';
import List from './List';

import { AppContext } from '../App';

//Line break component
const Br = () => <Text>{'\n'}</Text>;

const Home = ({navigation}) => {
    const state = useContext(AppContext);
   
    return (
    <View>
        <MyHeader navigation={navigation} type="home"/>
        <Br />
        <View>
            <List tasks={state.tasks} />
        </View>
        {state.addTaskModal}
        <View>{state.deleteModal}</View>
    </View>);
}

export default Home;