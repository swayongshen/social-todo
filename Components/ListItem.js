import React, {useState, useContext} from 'react';
import { Text, StyleSheet, View, ProgressViewIOSComponent } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import { AppContext } from '../App';
import DeleteTask from './DeleteTask';

const ListItem = ({id, isDone, description}) => {
    const [done, setDone] = useState(isDone);

    const {setDeleteModal} = useContext(AppContext);

    const showDeleteTask = (id) => {
        setDeleteModal(() => {
            return <DeleteTask id={id} />
        });
    }
    
    return (
        <>
        <View style={{flexDirection:"row"}}>
            {done 
                ?
                    <Icon.Button
                        name="checkbox-active"
                        onPress={() => {
                            console.log("clicked");
                            setDone(() => false)}
                        }
                        backgroundColor="white"
                        color="#121212"
                        style={style.button}
                    />
                :
                    <Icon.Button
                    name="checkbox-passive"
                    onPress={() => {
                        console.log("clicked");
                        setDone(() => true)}
                    }
                    backgroundColor="white"
                    color="#121212"
                    style={style.button}
                    />
            }
            <Text style={style.buttonText} onLongPress={() => {
                showDeleteTask(id)}}>{description}
            </Text>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 3,
        width: 60,
        paddingLeft: 15,
        height: 50
    },

    buttonText: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "black",
        paddingTop: 15
    }

})

export default ListItem;