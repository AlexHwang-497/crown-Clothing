import { createSelector } from "reselect";


// todo: this is an input selector function that usually takes the naming structure of seletct
    // todo: what it does is it's a function that gets the whole state and just returns a slice of it
const selectCart = state => state.cart;


// * selectCartItems, is a propety of our cart
// *it's going to look in our create selector call and what it takes is two aruments
export const selectCartItems = createSelector(
    // *first takes a collection/array of input selectsors
    [selectCart],
    // * the second argument is a function that will return the value we want out of the selector
    cart => cart.cartItems
  );

  export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
  );


  export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity,
        0
      )
  );

  export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
  );