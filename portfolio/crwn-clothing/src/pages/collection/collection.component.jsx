import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss'

const CollectionPage = ({collection}) =>{
    //* we destructure off the title
    const { title, items } = collection;
    return (
        <div className='collection-page'>
          <h2 className='title'>{title}</h2>
          <div className='items'>
            {items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
    );
};

// * we have the 2 paramters here now
    // * this is necessay because onlike other selectors, this selector needs a part of the state depnding on the URL parameter
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });

export default connect(mapStateToProps)(CollectionPage);