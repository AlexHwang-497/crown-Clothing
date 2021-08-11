import React from 'react'
import './collection-item.styles.scss'
// todo:A <span> element which is used to color a part of a text:
    // todo: example; <p>My mother has <span style="color:blue">blue</span> eyes.</p>

const CollectionItem = ({ id, name, price, imageUrl }) => (
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
  </div>
);

export default CollectionItem