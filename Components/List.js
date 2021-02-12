import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';


import ListItem from './ListItem';



const List = ({tasks}) => {
    return (
        <View>
            {tasks.map((task, index) => {
                return <ListItem key={task.id} {... task}/>
            })}
        </View>)
}

const style = StyleSheet.create({
})
export default List;