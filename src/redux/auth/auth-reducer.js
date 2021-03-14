import {combineReducers } from 'redux';
import {createReducer } from '@reduxjs/toolkit';
import authAction from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [authAction.registerSuccess]: (_, { payload }) => payload.user,
    [authAction.loginSuccess]: (_, { payload }) => payload.user,
    [authAction.logoutSuccess]: () => initialUserState,
    [authAction.getCorrentUserSuccess]: (_, {payload})=>payload,
});

const token = createReducer(null, {
    [authAction.registerSuccess]: (_, { payload }) => payload.token,
    [authAction.loginSuccess]: (_, { payload }) => payload.token,
    [authAction.logoutSuccess]: ()=>null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [authAction.registerError]: setError,
    [authAction.loginError]: setError,
    [authAction.logoutError]: setError,
    [authAction.getCorrentUserError]: setError,
});

const isAuthenticated = createReducer(null, {
    [authAction.registerSuccess]: () => true,
    [authAction.loginSuccess]: () => true,
    [authAction.getCorrentUserSuccess]: () => true,
    [authAction.registerError]: () => false,
    [authAction.loginError]: () => false,
    [authAction.getCorrentUserError]: () => false,
    [authAction.logoutSuccess]: () => false,
    
});

export default combineReducers({
    user,
    isAuthenticated,
    token,
    error,
});
