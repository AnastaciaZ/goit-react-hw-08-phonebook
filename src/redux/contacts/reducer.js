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
    clearContactsError,
} from './actions';

const initialState = {
    contacts: {
        items: [],
        filter: '',
        loading: false,
        error: null,
    },
};
 
const items = createReducer(initialState.contacts.items, {
    [fetchContactSuccess]: (_, {payload})=>payload,
    [addContactSuccess]: (state, action) => [action.payload, ...state],
    [deleteContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(initialState.contacts.loading, {
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

const error = createReducer(initialState.contacts.error, {
    [fetchContactError]: (_, { payload }) => payload,
    [addContactError]: (_, { payload }) => payload,
    [deleteContactError]: (_, { payload }) => payload,
    [clearContactsError]: ()=>null,
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});