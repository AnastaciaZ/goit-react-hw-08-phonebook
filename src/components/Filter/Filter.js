import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/actions';
import s from '../Filter/Filter.module.css';
import contactsSelectors from '../../redux/contacts/selectors';

const Filter = ({ items, name, onChangeFilter}) =>(

     <CSSTransition
            in={items.length >= 2}
            timeout={250}
            classNames={s}
         unmountOnExit>
        <div className={s.container}>
            <label className={ s.labelFilter}>Find contacts by name
             <br/>
                <input className={s.filterInput}
                    type="text"
                    value={name}
                    onChange={ (e)=>onChangeFilter(e.target.value)} />
            </label>    
         </div>
        </CSSTransition>
    
);

const mapStateToProps = state => ({
    name: contactsSelectors.getFilterName(state),
    items: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
    onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);