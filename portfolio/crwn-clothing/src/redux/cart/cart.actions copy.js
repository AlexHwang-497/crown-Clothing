
import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// * this will be a function that gets the item that we want to add to that array that we just made 
  // *and what will return is this new action type objct where the type is our car action type squad at item
  // * which will tell our producer, hey, i'm trying to add this item and the payload will be equal to the item
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

// * this works similar to the add Item
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});


// ? this is how the add item works
  // ? first, in cardt reducer, we had to make sure that we added the new value for which our  cart items we were tyring to track into our intial state of our reudcer
  // ? second, then we had to make a new action in cart.types.js
    // ? this was going to represent what we were tyring to do to modify the new property which is our cart items array
    // ?we define the actual action iteslf, which is our add item which is a function that get the item and 
    //? generates the new action w/ the actype of add item that we made passing the item as a payload, 
  // ? third, which our cart.reducer then has to listen for which new case for that new action type that we just made
    // ? so that whenever the action come in, we make sure that we're doing as we're reutrning the new state of our overall cart reducer
    // ? we have to amke sure it's a new array where we spread in the existing cart items, except we append the new item that we get as a payload
  // ? finally, we have to make sure that we upadate our actaul collection item in collection-preview.js
    // ? so that it pulls into it's props susing the new map dispatch to props where we make suare that when we define the actual additime iteslef, 
    // ? it's a function that gets whaever we want to apss in as the payload in as the properlty
    // ? we then return the dispatch action on additem