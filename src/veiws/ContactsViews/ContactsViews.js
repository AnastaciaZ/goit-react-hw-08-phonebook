import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Logo from '../../components/Logo/Logo';
import s from '../ContactsViews/ContactsViews.module.css';
import contactsOperations from '../../redux/contacts/operations';
import contactsSelectors from '../../redux/contacts/selectors';
  
    
class ContactsViews extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() { 
    return (
      
        <div>
        <Logo title="Phonebook"/>
        {this.props.loadingContacts && <h2 className={ s.loading}>Loading...</h2>}
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
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsViews);
