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
  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
// *this will put the collction on firebase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
    // console.log(collectionRef)
    // todo: If you do not need to read any documents in your operation set, 
    // todo: you can execute multiple write operations as a single batch that contains any combination of set(), update(), or delete() operations. 
    // todo: A batch of writes completes atomically and can write to multiple documents.
    const batch = firestore.batch()
    objectsToAdd.forEach(obj=>{
      // todo: doc()  adds a new document
      // * in this case give me a new document ref in this collection and randomly gnenerate an ID for me
      const newDocRef = collectionRef.doc()
      // console.log(newDocRef)
      batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;