import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import contactsStore from './redux/store';



ReactDOM.render(
    <Provider store={contactsStore.store}>
        {/*<PersistGate loading={null} persistor={ contactsStore.persistor}>*/}
        <BrowserRouter>
             <App />
        </BrowserRouter>
       
        {/*</PersistGate>*/}
    </Provider>,
    document.querySelector('#root')
);



