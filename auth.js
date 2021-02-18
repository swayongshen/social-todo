import axios from 'axios';
import Environment from './Environment'



export const sendLoginPostRequest = async ({email, password}) => {
    const url = Environment('API_END_POINT') + '/login';
    try {
        let response = await axios.post(url, {email, password});
        json = response.data;
        if (response.status != 200) {
            throw ("Login error, please check your credentials")
        //Set token
        } else {
            return json.userData.token;
        }
    } catch (error) {
        throw error;
    }
}

/**
 * Sends API request to register and returns the JWT token if successful.
 */
export const sendRegisterPostRequest = async (newUser) => {
    const url = Environment('API_END_POINT') + '/register';
    try {
        let response = await axios.post(url, newUser);
        json = response.data;
        console.log(json);
        if (response.status != 200) {
            throw (json.errors._message);
            
        //Set token
        } else {
            return sendLoginPostRequest(newUser);
        }
    } catch (error) {
        throw error;
    }
}
