import React, {Component} from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
import authAction from '../../../redux/auth/auth-actions';
import Button from '../../Button/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import s from './UserMenu.module.css';

class UserMenu extends Component{

    componentDidUpdate(){
    if (this.props.error) {
        setTimeout(() => {
            this.props.clearError();
        }, 2000);           
    }
};
    
render(){
    return (
<>
         <div className={s.loading}>
            {this.props.error && <Alert variant={'danger'}>{`ERROR: ${this.props.error}`}</Alert>}
            {this.props.loadinglogoutUser &&
                <Spinner animation="grow" variant="dark">
                <h2 className={s.loadingText}>Loading...</h2>
                </Spinner>}
            </div>

        <div className={s.container}>
         <span className={s.name}>Welcome, {this.props.name}</span>
         <Button label="Logout" type="button" onClick={this.props.onLogout} />
            </div>
            </>
    )
}
};

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    loadinglogoutUser: authSelectors.getAuthLoading(state),
    error: authSelectors.getAuthError(state),
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
    clearError: authAction.clearError,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);