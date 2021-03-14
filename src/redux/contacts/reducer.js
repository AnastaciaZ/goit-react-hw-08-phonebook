import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    changeFilter,
} from './actions';

const initialState = {
    contacts: {
        items: [],
        filter: '',
    },
};
 
const items = createReducer(initialState.contacts.items, {
    [fetchContactSuccess]: (_, {payload})=>payload,
    [addContactSuccess]: (state, action) => [action.payload, ...state],
    [deleteContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,   
});

const filter = createReducer(initialState.contacts.filter, {
    [changeFilter]: (_, action) => action.payload,
});

const error = createReducer(null, {
    [fetchContactError]: (_, { payload }) => payload,
    [addContactError]: (_, { payload }) => payload,
    [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});