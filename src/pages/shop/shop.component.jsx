// *because we need to store data on our page, we will make this a class page
import React from 'react'
import { Route } from 'react-router-dom';
import{connect} from 'react-redux'

import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {updateCollections} from '../../redux/shop/shop.actions'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';



// * vid 146; we are able to use route because of app.js aka     <Route path='/shop' component={ShopPage} />
  // *we are rendering a route in this case.  what we are saying is when the exact path is =, we want to dispaly the current path that we're on
  // * this is because our shop page is a routed component
// *{/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
  // * we are nesting the route- we are dynamically plucking off the right category from our reducer, so that it knows which ones to display when you're on the right page
  //* we are goint to tell our route name that the root name is aa paramaeter
// ! what is the match object?
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const{updateCollections}=this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot => {
      const collectionsMap=convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }

  render(){
    const {match} = this.props
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }

} 

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage)