import axios from 'axios';
//import getStorage from 'redux-persist/es/storage/getStorage';
import authAction from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => async dispatch => {

    dispatch(authAction.registerRequest());

    try {
        const response = await axios.post('/users/signup', credentials);
       
        dispatch(authAction.registerSuccess(response.data));
    } catch (error) {
        dispatch(authAction.registerError(error.message));
    }
};

const logIn = credentials => async dispatch => {
    dispatch(authAction.loginRequest());

    try {
        const response = await axios.post('/users/login', credentials);
       
        dispatch(authAction.loginSuccess(response.data));
    } catch (error) {
        dispatch(authAction.loginError(error.message));
    }
 };

const logOut = () => dispatch => { };

const getCurrentUser = () => (dispatch, getState) => { };

export default { register, logIn, logOut, getCurrentUser };