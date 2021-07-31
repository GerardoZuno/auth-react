import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC4IkaJ4-3qaP_qjBW_-I22Y2RWB8e-Bt4",
    authDomain: "auth-5a9ed.firebaseapp.com",
    projectId: "auth-5a9ed",
    storageBucket: "auth-5a9ed.appspot.com",
    messagingSenderId: "780805569997",
    appId: "1:780805569997:web:73ebece3bc20ac901e5884"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  const db = firebase.firestore()
  const auth = firebase.auth()

  export {auth, db}

