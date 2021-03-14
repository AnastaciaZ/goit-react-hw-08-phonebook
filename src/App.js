import React,{ Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/UserMenu/AppBar/AppBar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';
import s from './App.module.css';

const HomeView = lazy(() => import('./veiws/HomeView/HomeView'));
const RegisterViews = lazy(() => import('./veiws/RegisterViews/RegisterViews'));
const LoginViews = lazy(() => import('./veiws/LoginViews/LoginViews'));
const ContactsViews = lazy(() => import('./veiws/ContactsViews/ContactsViews'));

class App extends Component{

  componentDidMount(){
    this.props.onGetCurrentUser();
}

  render() {
    return (
      <div className={s.container}>
    <AppBar />
    
        <Suspense fallback={<p>Loading...</p>}>
    <Switch>
      <PublicRoute exact path="/" component={ HomeView} />
          <PublicRoute
            path="/register"
            restrictad
            redirectTo="/contacts"
            component={RegisterViews} />
          <PublicRoute
            path="/login"
            restrictad
            redirectTo="/contacts"
            component={LoginViews} />
          <PrivateRoute
            path="/contacts"
            component={ContactsViews}
            redirectTo="/login"
          />
          </Switch>
          </Suspense>
    </div>
    )
  }
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);