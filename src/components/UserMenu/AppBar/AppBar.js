import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigations/Navigation';
import UserMenu from '../User/UserMenu';
import s from '../AppBar/AppBar.module.css';



const AppBar = ({isAuthenticated}) => (
    <header className={s.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu/> : <AuthNav />}  
    </header>
);

const mapDispatchToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapDispatchToProps)(AppBar);