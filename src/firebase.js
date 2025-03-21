import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBt_JvvIYVf_SRg8mjKJFuR-SV1d6MSeKE',
  authDomain: 'line-clone-7ca70.firebaseapp.com',
  projectId: 'line-clone-7ca70',
  storageBucket: 'line-clone-7ca70.firebasestorage.app',
  messagingSenderId: '980422385508',
  appId: '1:980422385508:web:237343442043ccb2f5a471',
  measurementId: "G-79V849YC9B",
});

const db = firebaseApp.firestore();

//どのユーザーがログインしているのか
const auth = firebase.auth();

export { db, auth };
