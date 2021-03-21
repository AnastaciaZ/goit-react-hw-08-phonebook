import React,{ Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/UserMenu/AppBar/AppBar';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
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
       
        <Suspense fallback={<p className={s.loading}>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={ HomeView} />
              <PublicRoute
                path="/register"
                restricted
                redirectTo="/"
                component={RegisterViews} />
              <PublicRoute
                path="/login"
                restricted
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

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);