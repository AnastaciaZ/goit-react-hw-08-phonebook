import axios from 'axios';
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

        token.set(response.data.token);
        dispatch(authAction.registerSuccess(response.data));
       
    } catch (error) {
        dispatch(authAction.registerError(error.message));
    }
};

const logIn = credentials => async dispatch => {
    dispatch(authAction.loginRequest());

    try {
        const response = await axios.post('/users/login', credentials);
       
        token.set(response.data.token);
        dispatch(authAction.loginSuccess(response.data));
    } catch (error) {
        dispatch(authAction.loginError(error.message));
    }
 };

const logOut = () => async dispatch => {
    dispatch(authAction.logoutRequest());

    try {
        await axios.post('/users/logout');
       
        token.unset();
        dispatch(authAction.logoutSuccess());
    } catch (error) {
        dispatch(authAction.logoutError(error.message));
    }
};

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);

    dispatch(authAction.getCorrentUserRequest());

    try {
        const response = await axios.get('/users/current');
        dispatch(authAction.getCorrentUserSuccess(response.data));
    } catch (error) {
         dispatch(authAction.getCorrentUserError(error.message));
    }
};
const authOperations = { register, logIn, logOut, getCurrentUser };

export default authOperations;