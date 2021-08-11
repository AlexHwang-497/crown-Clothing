// * we are going to llok inside of our existing cart items to see if that cart item already 
    // *exists and we are going to actually write that in this code
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // todo: find() - will return the first item found in our array based off a condition that we pass in here
        // * we will get each individual cart item and we will check the cart items id to see if it mathes the item we are tyring to add ID
        // * if it matches, we will set that cart item where this condition is true to our constant, 
        // * if it doesn't after finding anythin after looping throug alll of it, it will be undefinded
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
    // *if it exists then we will return our car items.map
    if (existingCartItem) {
        return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id
        //   * we will create a new object where we have the cart item
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
    
      return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    };

    export const removeItemFromCart = (cartItems, cartItemToRemove) => {
      const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
      );
    // *if we have the existing cart item ===1....
      if (existingCartItem.quantity === 1) {
        // *we want to filter it out where our cartId number does not equal the cart item to remove id
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
      }
    // *
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        // ! discuss with carlos what's going on here
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    };
