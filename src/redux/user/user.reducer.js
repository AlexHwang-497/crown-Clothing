
import { UserActionTypes } from './user.types';

// todo: reducer is just a function that gets properties
    // todo: it gets a state object which represents the last state or an intial state aka object that we are trying to store when it receives an action
    // todo: that action is just an object that has a type which is a string value, so it's just the name that tells us what specific actions
    
    // todo: we need to make sure that our reducers are a ware of what specific type of action coming throug his and ti's goint to bease off  this type of peroptery
    // todo: payload - can be anything and the the only reason that we can say it's anything is because maybe w/ this payload object we want to do something with it

    // * we are setting up the inital state.  we need to set this up first before accesing the reducer

const INITIAL_STATE = {
            // *this is the samethign as what we put in earlier in our class constructor for 
            // * this.state={currentUser: null}
    currentUser: null
  };
  
// todo:state - is going to be something that hte redux store is going to pass into the reducer whenever an action fires
// todo:state=INITIAL_STATE - we are setting state for a defalut value of INITIAL_STATE
       // *swithch stmt - if our case is sufficinet run the following
            // * otherwise.... move to default aka return state
            // * we are essentially saying if set 'SET_CURRENT_USER' is the action typate that gets fired, we want to return a new object
                // * which represnts teh state that our user reducer is going to transform into
                // * we only want to modify the values that we care about and the value that we care about is our current user
                    // *  what that value will be is everything else on the state we alwyas want to spread an everying on the state
        // ! discuss in more detail, what is the payload and waht it does
                
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UserActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;