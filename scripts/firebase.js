// @ts-nocheck
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAb3626tLmGRRZOULgaS9TLdJ27Z9l29JA",
  authDomain: "web-app-e5df4.firebaseapp.com",
  projectId: "web-app-e5df4",
  storageBucket: "web-app-e5df4.appspot.com",
  messagingSenderId: "1032356009472",
  appId: "1:1032356009472:web:ef462564996bb0133f2ae5",
  measurementId: "G-Q7LS3FK7HG",
}
// Initialize Firebase

firebase.initializeApp(firebaseConfig)

//make aut and firestore references
// enable firebase auth service
const auth = firebase.auth()
// enable firebase firestore service
const db = firebase.firestore()
//   db.settings({timeStampInShots: true});
