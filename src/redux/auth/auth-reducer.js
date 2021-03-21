import {combineReducers } from 'redux';
import {createReducer } from '@reduxjs/toolkit';
import authAction from './auth-actions';

const initialUserState = {
    name: null,
    email: null,
    loading: false,
    error: null,
};

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

const isAuthenticated = createReducer(null, {
    [authAction.registerSuccess]: () => true,
    [authAction.loginSuccess]: () => true,
    [authAction.getCorrentUserSuccess]: () => true,
    [authAction.registerError]: () => false,
    [authAction.loginError]: () => false,
    [authAction.getCorrentUserError]: () => false,
    [authAction.logoutSuccess]: () => false,
    
});

const loading = createReducer(initialUserState.loading, {
    [authAction.registerRequest]: () => true,
    [authAction.registerSuccess]: () => false,
    [authAction.registerError]: () => false,
    [authAction.loginRequest]: () => true,
    [authAction.loginSuccess]: () => false,
    [authAction.loginError]: () => false,
    [authAction.getCorrentUserRequest]: () => true,
    [authAction.getCorrentUserSuccess]: () => false,
    [authAction.getCorrentUserError]: () => false,
    [authAction.logoutRequest]: () => true,
    [authAction.logoutSuccess]: () => false,
    [authAction.logoutError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(initialUserState.error, {
    [authAction.registerError]: setError,
    [authAction.loginError]: setError,
    [authAction.logoutError]: setError,
    [authAction.getCorrentUserError]: setError,
    [authAction.clearError]: ()=>null,
});

export default combineReducers({
    user,
    isAuthenticated,
    token,
    loading,
    error,
});
