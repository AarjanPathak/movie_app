import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCN_hob0CoxYmA7eo7qySvjyw8fRrbldlA",
    authDomain: "netflix-clone-2536c.firebaseapp.com",
    projectId: "netflix-clone-2536c",
    storageBucket: "netflix-clone-2536c.appspot.com",
    messagingSenderId: "779113834306",
    appId: "1:779113834306:web:e4f96dd02de80f8aa80adb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();


export {db, auth};

