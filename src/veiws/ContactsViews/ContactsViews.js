import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Logo from '../../components/Logo/Logo';
import s from '../ContactsViews/ContactsViews.module.css';
import contactsOperations from '../../redux/contacts/operations';
import contactsSelectors from '../../redux/contacts/selectors';
import { clearContactsError} from '../../redux/contacts/actions';
  

class ContactsViews extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  };

  componentDidUpdate() {
    if (this.props.error) {
        setTimeout(() => {
            this.props.clearFetchError();
        }, 2000);           
    }
  };

  render() { 
    return (
      <div>
        <Logo title="Phonebook" />
        <div className={s.loading}>
           {this.props.error && <Alert variant={'danger'}>{`ERROR: ${this.props.error}`}</Alert>}
        {this.props.loadingContacts && <Spinner animation="grow" variant="dark">
                        <h2 className={s.loadingText}>Loading...</h2>
          </Spinner>}
        </div>
        
        <div className={s.container}>
          <ContactForm />
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  loadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getContactsError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  clearFetchError: ()=>dispatch(clearContactsError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsViews);
