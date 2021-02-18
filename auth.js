import axios from 'axios';
import Environment from './Environment';
import deviceStorage from './storage';



export const sendLoginPostRequest = async ({email, password}) => {
    const url = Environment('API_END_POINT') + '/login';
    try {
        let response = await axios.post(url, {email, password});
        json = await response.data;
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
        json = await response.data;
        if (response.status != 200) {
            console.log(json.errors)
            throw ("Register error!");
        //Set token
        } else {
            return sendLoginPostRequest({email:newUser.email, password:newUser.password});
        }
    } catch (error) {
        throw ("Register error");
    }
}

export const checkedLoggedIn = async () => {
    //Check if token exists.
    const token = deviceStorage.getItem("id_token");
    if (token == null) {
        return null;
    }

    const url = Environment('API_END_POINT') + '/auth';
    try {
        let response = await axios.post(url, {token});
        json = await response.data;
        if (response.status != 200) {
            return null;
        //Set token
        } else {
            console.log("Success auth");
            return json.token;
        }
    } catch (error) {
        return null;
    }
    

}