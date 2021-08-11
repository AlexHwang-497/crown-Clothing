import React from 'react'

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss'
// todo:A <span> element which is used to color a part of a text:
    // todo: example; <p>My mother has <span style="color:blue">blue</span> eyes.</p>
// ! how are we able to pull the collections data?
// ! discuss with carlos how we are able to add items now
const CollectionItem = ({ item, addItem }) => {
  // * we are doing this is becase we want these values still because we use them inside of our component defintion, but we need access to the item itself
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      {/* on  the click, we will add our items */}
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  // * what we are doing here is we are simply creating this new function that's 
  // * a project add item that will go in our collection item as the add item function that we need to leverage
  addItem: item => dispatch(addItem(item))
});    

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);