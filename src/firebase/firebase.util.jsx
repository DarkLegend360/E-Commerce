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

export const addCollectionsAndDocuments= async (collectionKey,objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  });
  return await batch.commit();
}

export const convertSnapshotToMap = (collection)=>{
  const transformedCollection = collection.docs.map(doc=>{
    const {title,items } = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id:doc.id
    };
  });
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{});
}

firebase.initializeApp(firebaseConfig);

export const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth);
    },reject);
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider); 

export default firebase;