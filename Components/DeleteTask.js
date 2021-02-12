import React, {useContext} from 'react';

import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { ListContext } from '../App';



const DeleteTask = ({id, hideDeleteTask}) => {
    const {tasks, setTasks} = useContext(ListContext);

    const deleteTask = (idToDelete) => {
        filteredTasks = tasks.filter(task => task.id != idToDelete);
        setTasks(() => filteredTasks);
    }

    return (<View>
        <Icon.Button
            name="delete"
            onPress={() => {
                deleteTask(id);
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