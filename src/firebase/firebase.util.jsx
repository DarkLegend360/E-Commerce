import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_UbRgfh4uFSZ95nDsW0LuPRH-trXb3e4",
  authDomain: "e-commerce-17193.firebaseapp.com",
  databaseURL: "https://e-commerce-17193.firebaseio.com",
  projectId: "e-commerce-17193",
  storageBucket: "e-commerce-17193.appspot.com",
  messagingSenderId: "686859093834",
  appId: "1:686859093834:web:7f67c5eba77f02804763b3",
  measurementId: "G-9T50TDY4ZT"
};

export const createUserAccount = async (userAuth,additionalProps)=> {
  if(!userAuth) return;
  const userRef = firestore.doc(`accounts/${userAuth.uid}`);
  const userSnap = await userRef.get();
  if(!userSnap.exists) {
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({displayName,email,createdAt,...additionalProps});
    } catch(error) {
      console("Error Occoured:",error);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider); 

export default firebase;