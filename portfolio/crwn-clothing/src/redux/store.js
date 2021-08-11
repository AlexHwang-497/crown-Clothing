// *we need to import in the create store function as well as the middleware
    // * we need to add middleware to our store so that whenever actions get fired or dispatched, we can catch them and then display them
        // * the midleware, which is the peace in the middle between our actions firing and our root reducer, are pretty much just functions taht receive actions in and then do

import { createStore, applyMiddleware } from 'redux';
// * this will alow our browser to actaully cahce our store now depending on certain configurations
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
// *....midllewares will spread in everything from the array aka [logger]
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

export default {store, persistor};