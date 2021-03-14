import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import contactsStore from './redux/store';
import 'modern-normalize/modern-normalize.css';



ReactDOM.render(
    <Provider store={contactsStore.store}>
        <PersistGate loading={null} persistor={ contactsStore.persistor}>
        <BrowserRouter>
             <App />
        </BrowserRouter>
       
        </PersistGate>
    </Provider>,
    document.querySelector('#root')
);



