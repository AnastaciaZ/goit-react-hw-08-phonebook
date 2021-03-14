import axios from 'axios';
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
} from './actions';

const fetchContacts = () => async dispatch =>{
    dispatch(fetchContactRequest());

    try{
        const {data}=await axios.get('/contacts');

        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error.message));
    }
};

const addContact = (name, number) => async dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post('/contacts', contact);

        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error.message));
    }  
};

const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`/contacts/${contactId}`);

        dispatch(deleteContactSuccess(contactId));
    } catch (error) {
        dispatch(deleteContactError(error.message));
    }
};

const contactsOperations={ fetchContacts, addContact, deleteContact }

export default contactsOperations;