import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';
import { persistor } from './Store';
// import {createStore} from "redux";
// import rootReducer from "./redux/reducer";
 import { PersistGate } from 'redux-persist/integration/react';
// import  Persist  from './redux/reducer/Persist';

// import {persistStore}  from './redux/reducer/Persist'
//  import {persistStore} from './redux/reducer';
// import { PersistGate } from 'redux-persist/integration/react';




const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore ( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);



   