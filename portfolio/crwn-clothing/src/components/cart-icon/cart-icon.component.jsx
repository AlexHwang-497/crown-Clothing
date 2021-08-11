// *gives us the shopping cart icon
import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );

  
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
// *this creates the counter for on the cart icon aka the amount of items you are purchasing
// todo:this is a selector function
  // todo: we are writing code that gets a state as in the whole state object and then pulls of just a small portion/slice of the state
  // todo: we're getting cart items and then just reducing over those cart items to get a new value


  const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);