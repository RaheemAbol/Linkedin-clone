import firebase from 'firebase';

// importing our firebase database above and our config below \\
// our firebaseApp then passes the firebaseConfig into the initializeApp method of firebase. \\
// The db then goes the firebaseApp we just initialized and grabs firestore. Then giving db access to our firebaseApp variable. \\
// In the auth variable we will use firebase for our email authentication with firebase.auth(); \\


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
