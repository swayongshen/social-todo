import React, {useContext} from 'react';

import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const DeleteTask = ({id, hideDeleteTask, deleteItem}) => {
    return (<View>
        <Icon.Button
            name="delete"
            onPress={() => {
                deleteItem(id);
                hideDeleteTask();
            }}
            backgroundColor="red">
            Delete task
        </Icon.Button>
        <Icon.Button
            name="corner-up-left"
            onPress={() => hideDeleteTask()}
            backgroundColor="grey">
            Cancel
        </Icon.Button>
    </View>)
}

export default DeleteTask;