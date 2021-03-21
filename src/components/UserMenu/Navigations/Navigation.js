import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import s from '../Navigations/Navigation.module.css';

const Navigation = ({isAuthenticated}) => (
    <div>
        <NavLink
            to="/"
            exact
            className={s.NavigationLink}
            activeClassName={s.NavigationLinkActive}>
            Main
        </NavLink>
        {isAuthenticated && (
            <NavLink
            to="/contacts"
            exact
            className={s.NavigationLink}
            activeClassName={s.NavigationLinkActive}>
            Phonebook
            </NavLink>
        )}
    </div>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

