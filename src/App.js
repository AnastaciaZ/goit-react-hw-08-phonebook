import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './veiws/HomeView/HomeView';
import AppBar from './components/UserMenu/AppBar/AppBar';
import RegisterViews from './veiws/RegisterViews/RegisterViews';
import LoginViews from './veiws/LoginViews/LoginViews';
import ContactsViews from './veiws/ContactsViews/ContactsViews';
import s from './App.module.css';



const App = () => (
  <div className={s.container}>
    <AppBar />
    
    <Switch>
      <Route exact path="/" component={ HomeView} />
      <Route path="/register" component={ RegisterViews} />
      <Route path="/login" component={ LoginViews} />
      <Route path="/contacts" component={ ContactsViews} />
    </Switch>
    </div>
);

export default App;


