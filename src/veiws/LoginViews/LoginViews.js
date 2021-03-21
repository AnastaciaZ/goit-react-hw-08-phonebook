import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import authAction from '../../redux/auth/auth-actions';
import Button from '../../components/Button/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Logo from '../../components/Logo/Logo';
import s from '../LoginViews/LoginViews.module.css';


class LoginViews extends Component{
    state = {
        email: '',
        password: '',
    };

componentDidUpdate() {
    if (this.props.error) {
        setTimeout(() => {
            this.props.clearLoginError();
        }, 2000);           
    }
}

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
                <div className={s.loading}>
                {this.props.error && <Alert variant={'danger'}>{`ERROR: ${this.props.error}`}</Alert>}
                {this.props.loadingloginUser &&
                    <Spinner animation="grow" variant="dark">
                    <h2 className={s.loadingText}>Loading...</h2>
                    </Spinner>
                }
            </div>
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

const mapStateToProps = state => ({
    loadingloginUser: authSelectors.getAuthLoading(state),
    error: authSelectors.getAuthError(state),
});

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
    clearLoginError: authAction.clearError,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginViews);

