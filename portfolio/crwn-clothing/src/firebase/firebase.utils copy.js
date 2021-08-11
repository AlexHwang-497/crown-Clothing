// ! discuss with carlos what is the point of this section?

import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCkt0OAWBQ2HHPc5k0vSl5rQQv7C5vLjGA",
    authDomain: "crwn-db-f018f.firebaseapp.com",
    projectId: "crwn-db-f018f",
    storageBucket: "crwn-db-f018f.appspot.com",
    messagingSenderId: "415703578570",
    appId: "1:415703578570:web:04c28bebe22d6239750133",
    measurementId: "G-5NRY9QXP7E"
  };
  // * we are passing our user object that we get from the library and pass in any additioal data that we will need
  // *if the snapshot doesn't exist, we will be creating the data in the try{} aka a nwe user
  //* we will then return our userRef, because there's a chance that we want ot use this uers referce, object to do other things
  // ! discuss with carlos in more detail what is going on.  
  export const createUsersProfileDocument = async(userAuth, additionalData) =>{
    // if user object does not exist.  we don't want to do anything else.  we want to exit from this function
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  


  firebase.initializeApp(config)


  // *we wil export this out for anything that needs authentication
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;