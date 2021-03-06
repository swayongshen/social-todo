import AsyncStorage from '@react-native-async-storage/async-storage';
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
            const token = await AsyncStorage.getItem(key);
            return token;
          } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
          }
    },

    async removeItem(key) {
        try {
          await AsyncStorage.removeItem(key);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
    }

  
};

export default deviceStorage;