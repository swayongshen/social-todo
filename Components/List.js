import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';


import ListItem from './ListItem';



const List = ({items}) => {
    return (
        <View>
            {items.map((item, index) => {
                return <ListItem key={item.id} {... item}/>
            })}
        </View>)
}

const style = StyleSheet.create({
})
export default List;