import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilterName = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getFilterContacts = createSelector(
    [getAllContacts, getFilterName],
    (contacts, filter) => {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
        );
    },
);

const selectors = { getLoading, getFilterName, getAllContacts, getFilterContacts};

export default selectors;