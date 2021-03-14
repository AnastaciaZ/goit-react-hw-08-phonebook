import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
import Button from '../../Button/Button'
import s from './UserMenu.module.css';

const UserMenu = ({email, onLogout }) => (
    <div className={s.container}>
         <span className={s.name}>Welcome, {email}</span>
         <Button label="Logout" type="button" onClick={onLogout} />
    </div>

);

const mapStateToProps = state => ({
    email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);