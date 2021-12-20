import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4DZ60igWKCRo_QxoJwASz7r3-S6lfTds",
  authDomain: "clone-4241b.firebaseapp.com",
  projectId: "clone-4241b",
  storageBucket: "clone-4241b.appspot.com",
  messagingSenderId: "315957908271",
  appId: "1:315957908271:web:b93deaa884e09eeca207da",
  measurementId: "G-XSGLFV7B1N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};