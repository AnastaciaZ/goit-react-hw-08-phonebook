import {combineReducers } from 'redux';
import {createReducer } from '@reduxjs/toolkit';
import authAction from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [authAction.registerSuccess]: (_, { payload }) => payload.user,
    [authAction.loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
    [authAction.registerSuccess]: (_, { payload }) => payload.token,
    [authAction.loginSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
    [authAction.registerError]: (_, { payload }) => payload,
    [authAction.loginError]: (_, {payload})=>payload,
});

export default combineReducers({
    user,
    token,
    error,
});
