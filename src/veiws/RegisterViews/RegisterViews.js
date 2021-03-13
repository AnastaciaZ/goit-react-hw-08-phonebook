import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import s from '../RegisterViews/RegisterViews.module.css';

class RegisterViews extends Component{
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;
        

        return (
            <div>
                <Logo title="Page of Registration" />
                
                <div className={s.container}>
                    <form onSubmit={this.handleSubmit}
                        className={s.form}
                        autoComplete="off"
                    >
                        <label className={s.label}>
                            Name
                            <input
                                className={s.input}
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </label>
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
                        <Button label="Register" type="submit" />
                        </form>
                </div>
            </div>
        )
    }

};

const mapDispatchToProps = dispatch => ({
    onRegister: (data) => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterViews);

/*
const mapDispatchToProps = {
    onRegister: authOperations.register,
}*/