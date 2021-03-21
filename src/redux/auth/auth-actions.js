import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCorrentUserRequest = createAction('auth/getCorrentUserRequest');
const getCorrentUserSuccess = createAction('auth/getCorrentUserSuccess');
const getCorrentUserError = createAction('auth/getCorrentUserError');

const clearError = createAction('auth/clearError');

const authAction = {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCorrentUserRequest,
    getCorrentUserSuccess,
    getCorrentUserError,
    clearError,
};

export default authAction;