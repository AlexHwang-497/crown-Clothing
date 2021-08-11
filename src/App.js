// *asdfsdfasdfasdf this is a testasdasdfadsfasfasdfasdfasdf
//!! asdf;lajdsflakjsdfl;akjds;lfajksd;lfjsadl;fjasl;dfj

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './redux/checkout/checkout.component';

import Header from './components/header/header.component'
import { render } from '@testing-library/react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// ! discuss a little more detail of what is going on here
// todo: compnent -  will be the compnent that we wnat to render
// todo: path - will be a string equal to the path itself from the current place; ex. localhost:3000
// todo:exact - is a true or false property
// *these are the main thing we need for our route component
// todo: switch component - we need to wrap our wrote components in it
// todo: what this does is the moment that route inside of it finds a match in its path, it does not render anything else but that route
// todo: switch will match slash first and then it will not render anthing else after it
// ! discuss with carlos on firebase
// * firebase: for firebase, we want to store the state of our user aka how are they loggin in? ex. through goog?, email and password?
  // * to do this we will now convert the App() into a class
  // *w/ firebase, we just want to know when are we signed in and when we are signed out
  class App extends React.Component {
    // ? we wlimiated the construtor becase of mapDispatchToProps
    // *because this is an open subscription beleow aka ComponentDidmOunt(), we also have to close subscirtioins when an unomunt ahpppaens.  
      // * we don't want any memory leaks in our javascript applicatino
      unsubscribeFromAuth = null;
    // *what we are doing here makes this an open subsciption between our application and firebase app
      // *wherever any changes occur on firebase from any source related to this applicatino, 
      // *firebase sends out a message taht syas that the off status change
      // * the user has updated, whether they've signed in through some service, such as our google sign in or our email password sign up
      // * it wall call it so we don't actually have to manually fetch every time we want to check if that state has changed
        // !  discuss with carlos in regrds to the fetching
    componentDidMount(){
      const { setCurrentUser } = this.props;
      // todo: onAuthStateChanged() - this is a method on the auth library that we get from firebase
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
        // * we are checking here if the user is actually signed in
        if(userAuth){
          // *we are using this to check if our database has updated at that refernce w/ any new data
          const userRef = await createUserProfileDocument(userAuth);
          // *callin on snap shot is very similar to calling on off-stage changed
            // *what we get back is the snapshot object and on the snapshot object is hwere we are going to get the data related to this user that we possbily stored
          userRef.onSnapshot(snapShot=>{
            setCurrentUser({
                id:snapShot.id,
                ...snapShot.data()
              })
          })
        }
      // ! discuss with carlos what is going on here
        setCurrentUser(userAuth)
      })
    }
    // *we want to close this subscription whenever our ocmponent un mounts 
    componentWillUnmount() {
      // *this will close the subscritpion
      this.unsubscribeFromAuth();
    }
  
  
    render(){
      return (
        <div>
        {/* this helps us with signing out */}
        <Header/>
        <Switch>
          {/* what this is sayin is that this math must be exactlly 'slash' in order to render our home page component  */}
          <Route exact path='/' component={HomePage}/>
          {/* this will take us to our shop page */}
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/Checkout' component={CheckoutPage} />
          <Route 
            exact
            path='/signin'
            // *after signing in, this will redirect us to the mainpage until we sign out
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>  
        </div>
      );
    }
  }
// * we are returning our current user prop which is equal to our current user
  const mapStateToProps =({user}) => ({
    currentUser:user.currentUser
  })
  // todo:  dispatch - is a way for Redux to know that whatever you're passing me/object you're passing me, it is going to be an action object taht i'm going to pass to every producer
  const mapDispatchToProps = dispatch => ({
    // *by passin in user, we are invoking current user with the user that will then be used as the payload
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);

