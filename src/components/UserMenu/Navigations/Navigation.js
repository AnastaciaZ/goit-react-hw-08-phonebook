import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigations/Navigation.module.css';

const Navigation = () => (
    <div>
        <NavLink
            to="/"
            exact
            className={s.NavigationLink}
            activeClassName={s.NavigationLinkActive}>
            Main
        </NavLink>
        <NavLink
            to="/contacts"
            exact
            className={s.NavigationLink}
            activeClassName={s.NavigationLinkActive}>
            Phonebook
       </NavLink>
    </div>
);

export default Navigation;

