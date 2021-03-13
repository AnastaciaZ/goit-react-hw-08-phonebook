import React from 'react';
import Button from '../../Button/Button'
import s from './UserMenu.module.css';

const UserMenu = ({avatar, name, onLogout }) => (
    <div className={s.container}>
        <img src={avatar} alt="" className={ s.avatar}/>
        <span className={s.name}>Welcome, {name}</span>
         <Button label="Logout" type="button" onClick={onLogout} />
    </div>

);

export default UserMenu;