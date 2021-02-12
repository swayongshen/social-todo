import React from 'react';
import { View, Text, Button } from 'react-native';

import Modal from 'react-native-modal';


const AddTaskModal = ({ showAddTask, setShowAddTask }) => {
    return (
        <View>
          <Modal isVisible={showAddTask}>
            <View style={{ flex: 1 }}>
              <Text>I am the modal content!</Text>
              <Button title="Cancel" onPress={() => setShowAddTask(() => false)}/>
            </View>
          </Modal>
        </View>
      )
}

export default AddTaskModal;