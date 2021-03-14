import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import s from '../LoginViews/LoginViews.module.css';

class LoginViews extends Component{
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;
        

        return (
            <div>
                <Logo title="Login" />

                <div className={s.container}>
                    <form onSubmit={this.handleSubmit}
                        className={s.form}
                        autoComplete="off"
                    >
                        <label className={s.label}>
                            Email
                            <input
                                className={s.input}
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </label>
                        
                        <label className={s.label}>
                            Password
                            <input
                                className={s.input}
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                            </label>
                        <Button label="Log in" type="submit" />
                        </form>
                </div>
            </div>
        )
    }

};

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};


export default connect(null, mapDispatchToProps)(LoginViews);

