import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD_wq2W-waYhor0wilUYmNehiyjg2U_gwI",
    authDomain: "redux-linkedin-ra.firebaseapp.com",
    projectId: "redux-linkedin-ra",
    storageBucket: "redux-linkedin-ra.appspot.com",
    messagingSenderId: "1080597713557",
    appId: "1:1080597713557:web:d1eb053193125cd9aa019c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };