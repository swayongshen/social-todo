import React, {useState, useContext} from 'react';
import { Text, StyleSheet, View, ProgressViewIOSComponent } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

import { ListContext } from '../App'

const ListItem = ({id, isDone, description}) => {
    const [done, setDone] = useState(isDone);
    const state = useContext(ListContext);

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
            <Text backgroundColor="black" style={style.buttonText} onLongPress={() => {
                state.showDeleteTask(id)}}>{description}</Text>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderRadius: 10,
        width: 50,
        textAlign:'center'
    },

    buttonText: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10
    }

})

export default ListItem;