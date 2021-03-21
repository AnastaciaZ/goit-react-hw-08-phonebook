import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/operations';
import contactsSelectors from '../../redux/contacts/selectors';
import { clearContactsError } from '../../redux/contacts/actions';
import shortid from 'shortid';
import Button from '../Button/Button';
import AlertMessage from '../Alert/Alert';
import styleAlert from '../Alert/Alert.module.css';
import Alert from 'react-bootstrap/Alert';
import s from '../ContactForm/ContactForm.module.css';


class ContactForm extends React.Component { 
    state = {
        name: '',
        number: '',
        message: null,
    };

    componentDidUpdate() {
    if (this.props.error) {
        setTimeout(() => {
            this.props.clearContactsError();
        }, 2000);           
    }
}

    nameInputId = shortid.generate();

    handleChange = event => {
    const { name,value } = event.currentTarget;
    this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.name === '') {
            this.setState({ message: 'Please enter contact name' }) || this.alert();
            return;
        }
        if (this.state.number === '') {
            this.setState({ message: 'Please enter contact number' }) || this.alert();
            return;
        }
        
       if (this.props.items.some((item) => item.name === this.state.name)){ 
           this.setState({ message: `${this.state.name} is already in contacts!` }) || this.alert();
            return;
        }
    
        this.props.onSubmit(this.state.name, this.state.number);
        this.reset();
    };

    alert = () => {
        setTimeout(() => {
        this.setState({ message: null });
      }, 2000)
    }
    reset = () => { 
        this.setState({name: '', number: ''});
        };

    render() { 
        const {name, number, message } = this.state;
        return (
            <>
            <div className={s.loading}>
            {this.props.error && <Alert variant={'danger'}>{`ERROR: ${this.props.error}`}</Alert>}
            </div>

            <form className={ s.contactsForm} onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId} className={ s.labelForm}>  
                    Name
           <br />
                    <input
                    className={ s.contactInput}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                        id={this.nameInputId} />
                </label>
                <br/>
                <label className={ s.labelForm}>
                    Number
                     <br />
            <input
                    className={ s.contactInput}
                    type="text"
                    name="number"
                    value={number}
                    onChange={this.handleChange} />
                </label>
                <br />
                <Button label="Add contact" type="submit" />
                
                <CSSTransition
                    in={message!==null}
                    timeout={250}
                    classNames={styleAlert}
                unmountOnExit>
                    <AlertMessage message={ message}/>
               </CSSTransition>

                </form>
            </>    
        );
    };
};

const mapStateToProps = state => ({
    items: contactsSelectors.getAllContacts(state),
    error: contactsSelectors.getContactsError(state),
});

const mapDispatchToProps = {
    onSubmit: contactsOperations.addContact,
    clearContactsError: clearContactsError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);