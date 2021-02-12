import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

const ListItem = ({isDone, description}) => {
    const [done, setDone] = useState(isDone)
    return (
        <View style={style.button}>
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
                    >{<Text backgroundColor="black">{description}</Text>}</Icon.Button>
                :
                    <Icon.Button
                    name="checkbox-passive"
                    onPress={() => {
                        console.log("clicked");
                        setDone(() => true)}
                    }
                    backgroundColor="white"
                    color="#121212"
                >{<Text backgroundColor="black">{description}</Text>}</Icon.Button>
            }
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        borderColor:"#121212"
    }
})

export default ListItem;