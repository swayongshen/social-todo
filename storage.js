import { AsyncStorage } from '@react-native-community/async-storage';
import { KeyboardAvoidingView } from 'react-native';

const deviceStorage = {
    async saveItem(key, value) {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
    },


    async getItem(key) {
        try {
            await AsyncStorage.getItem(key);
          } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
          }
    }

  
};

export default deviceStorage;