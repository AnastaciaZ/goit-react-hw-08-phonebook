import React, {Component} from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/operations';
import { clearContactsError } from '../../redux/contacts/actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Alert from 'react-bootstrap/Alert';
import Button from '../Button/Button';
import s from '../ContactList/ContactList.module.css';
import contactsSelectors from '../../redux/contacts/selectors';


class ContactList extends Component {

componentDidUpdate() {
    if (this.props.error) {
        setTimeout(() => {
            this.props.clearContactsError();
        }, 2000);           
    }
    };

    render() {
        const { contacts, error, onDelete } = this.props;
        return (
        <>
        <div className={s.loading}>
        {error && <Alert variant={'danger'}>{`ERROR: ${error}`}</Alert>}
        </div>
                
        <TransitionGroup component="ul">
            {contacts.map(({ id, name, number }) => (
                <CSSTransition key={id} timeout={250} classNames={s}>
                    <li className={s.contactList} id={ id}>
                        <p className={s.contactText}>{name}</p>
                        <p className={s.contactText}>{number}</p>
                        <Button label="Delete" onClick={() => onDelete(id)} />
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
        </>
    );
    }
};

const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getFilterContacts(state),
    error: contactsSelectors.getContactsError(state),
});

const mapDispatchToProps = dispatch => ({
    onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
    clearContactsError: () => dispatch(clearContactsError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
