import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { useForm, Controller } from 'react-hook-form';
import { ListContext } from '../App'

const AddTaskModal = ({ showAddTask, setShowAddTask }) => {
    const { control, handleSubmit, errors } = useForm();
    const state = useContext(ListContext);

    const addTask = (formData) => {
        const currTasks = state.tasks;
        const newTask = {id: currTasks.length + 1, isDone: false, description: formData.description}
        currTasks.push(newTask);
        state.setTasks(currTasks);
        setShowAddTask(false);
    }

    return (
        <View>
            {console.log("render")}
            <Modal isVisible={showAddTask} backdropColor="white">
                <View style={style.form}>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Enter your new to do here."
                            />
                        )}
                        name="description"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.description && <Text>This is required.</Text>}
                    <View style={style.buttonRow}>
                        <Button 
                            title="Add" 
                            onPress={handleSubmit(addTask)}
                        />
                        <Text style={{backgroundColor:"white"}}>  </Text>
                        <Button title="Cancel" 
                            onPress={() => {
                                setShowAddTask(() => false)}
                            }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        maxHeight: 90
    },

    buttonRow: {
        flex:1,
        flexDirection:"row",
        backgroundColor: "black"
    },

    buttons: {
        height: 20
    }
})

export default AddTaskModal;