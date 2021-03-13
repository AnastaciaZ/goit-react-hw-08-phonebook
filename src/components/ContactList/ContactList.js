import React from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/operations';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '../Button/Button';
import s from '../ContactList/ContactList.module.css';
import contactsSelectors from '../../redux/contacts/selectors';

const ContactList = ({ contacts, onDelete}) => {
    return (
        <TransitionGroup component="ul">
            {contacts.map(({ id, name, number }) => (
                <CSSTransition key={id} timeout={250} classNames={s}>
                    <li className={s.contactList} /*key={id}*/ id={ id}>
                        <p className={s.contactText}>{name}</p>
                        <p className={s.contactText}>{number}</p>
                        <Button label="Delete" onClick={() => onDelete(id)} />
                    </li>
                </CSSTransition>
            ))}
            </TransitionGroup>
    );
};

const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getFilterContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
