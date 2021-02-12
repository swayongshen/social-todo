import React from 'react';
import { View } from 'react-native';


import ListItem from './ListItem';

const List = ({items}) => {
    return (
        <View>
            {items.map((item, index) => {
                return <ListItem key={index} {... item}/>
            })}
        </View>)
}

export default List;