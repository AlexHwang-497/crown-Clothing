
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);


// * this function is involved with getting our collection id so we can go to their correct pages aka a hats page or a jackets page forex.
  // * we are finding collection.id matching the url parameter of our collection id map
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    // * we don't need to use this function anymore because we changed the shop database format
    // collections => collections.find(collection => collection.id===COLLECTION_ID_MAP[collectionUrlParam])
    // *we are able to use this due to the new changes in our database
    collections => (collections ? collections[collectionUrlParam] : null)
  );

// *since we changed our database, we don't need this format anymore
  // const COLLECTION_ID_MAP = {
//   hats:1,
//   sneakers:2,
//   jackets:3,
//   womens:4,
//   mens:5
// }
