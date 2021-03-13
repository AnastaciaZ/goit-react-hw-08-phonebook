import React from 'react';
import { CSSTransition } from 'react-transition-group';
import srtyles from '../Logo/Logo.module.css';

const Logo = ({ title}) => (
    <CSSTransition
        in={true}
        appear={true}
        timeout={ 500}
        classNames={srtyles}
        >
    <div>
        <h1 className={srtyles.logo}>{title}</h1>
    </div>
       </CSSTransition>
);

export default Logo;