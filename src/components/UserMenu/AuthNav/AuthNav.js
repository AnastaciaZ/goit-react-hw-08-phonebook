import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
            className={s.NavigationLink}
            activeClassName={s.NavigationLinkActive}
            >
            Registration
        </NavLink>
        <NavLink
          to="/login"
            exact
            className={s.NavigationLink}
            activeClassName={s.NavigationLinkActive}
            >
            Log in
       </NavLink>
    </div>
);

export default AuthNav;

/*
<div>Логин</div>
        <div>Регистрация</div>*/