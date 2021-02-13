import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { useForm, Controller } from 'react-hook-form';
/** Pass context state around */
import { AppContext } from '../App'
/** Dependency for uuid */
import 'react-native-get-random-values';
/** Used to generate unique key values */
import  {v4 as uuidv4 } from 'uuid';

const AddTaskModal = ({setAddTaskModal }) => {
    /** React hook form stuff */
    const { control, handleSubmit, errors } = useForm();

    const { tasks, setTasks } = useContext(AppContext);

    /**
     * Adds a new task to useState variable tasks.
     */
    const addTask = (formData) => {
        const currTasks = tasks;
        //Generate unique ID.
        const newId = uuidv4();
        const newTask = {id: newId, isDone: false, description: formData.description}
        currTasks.push(newTask);
        setTasks(currTasks);
        setAddTaskModal(null);
    }

    /**
     * The text box field component for user to enter description of new task.
     */
    const inputField = <Controller
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

    return (
        <View>
            {console.log("render")}
            <Modal isVisible={true} backdropColor="white">
                <View style={style.form}>
                    {inputField}
                    {/* Error message */}
                    {errors.description && <Text style={style.errorMsg}>This is required.</Text>}
                    <View style={style.buttonRow}>
                        <Button 
                            title="Add" 
                            onPress={handleSubmit(addTask)}
                        />
                        <Text style={{backgroundColor:"white"}}> </Text>
                        <Button title="Cancel" 
                            onPress={() => {
                                setAddTaskModal(() => null)}
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
        maxHeight: 100
    },

    buttonRow: {
        flex:1,
        flexDirection:"row",
        backgroundColor: "black"
    },

    buttons: {
        height: 20
    },

    errorMsg: {
        backgroundColor:"red",
        color:"white",
    }
})

export default AddTaskModal;