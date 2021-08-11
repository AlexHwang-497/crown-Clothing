import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { store, persistor } from './redux/store'

import './index.css';
import App from './App';

// todo: Provider - is a component that is the parent of everything inside of our applicatoin
  // todo: as the parent, it allows us to get access to all of the things related to the
  // todo: store that we're going to put all of the actaul code we want to store on our reduct state
  // *to be more exact, the provider is this copnent class that we get from  react redux that once
  // *passed the store object will be able to give react the store context to the rest of the application
  // *so we can dispatch actions to that store or we cn actaully pull values off of the store and into our compennets
  // * this give us access to react-redux now becasue of doing this
  // todo: BrowserRouter - a component that we wrap around our component,
    // todo: all of the functionality of routing that htis library provides

    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );