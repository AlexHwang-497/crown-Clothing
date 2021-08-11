// todo: root reducer - the actual base reducer object aht represents all of the state of our application
    // todo: this reducer will end up being the actual code that combines all of our states together
        // todo: we do this because we ant to break the code up into it's individual section.  



  
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';;
// // *this is the actual local storge object on our window browser.  this is telling redux persist i want to use local stoarge as my default storage
// import storage from 'redux-persist/lib/storage';


// import userReducer from './user/user.reducer';
// // ! why do we need to bring cartReducer in here ?
// import cartReducer from './cart/cart.reducer';

// const persistCofig ={
//   key:'root',
//   storage,
//   // * this is the property/array that conats the string names of any of the reducer tha we want to store
//   whitelist:['cart']
// }

// export default combineReducers({
//   user: userReducer,
//   cart : cartReducer
// });

// export default persistReducer(persistConfig, rootReducer);


import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);