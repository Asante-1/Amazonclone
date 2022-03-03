import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCUUMmPoiYW5MX8I9bHYCXuV0VLZ79yiMg",
  authDomain: "clone-f7ead.firebaseapp.com",
  projectId: "clone-f7ead",
  storageBucket: "clone-f7ead.appspot.com",
  messagingSenderId: "185876995038",
  appId: "1:185876995038:web:4a38b30e1cb643776b5b4f",
  measurementId: "G-45CQ1GM8YX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();



 
export { db, auth};






