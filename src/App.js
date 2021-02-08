import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

// The App Body will be setup with three different sections sidebar, feed , and widgets.\\
// In our App we pull the user from the store useing the useSelector() and passing it selectUser \\
// Before the login component we set up an if statement that says if there is no user then display the login page otherwise render the rest of the app.\\
// we create a useEffect that takes in our auth and passed it the method onAuthStateChanged() which is then passed the userAuth.\\
//^ if the userAuth is there then the user is logged in. Else the user is logged out. \\
// if the user is logged in we will dispatch it to the store useing our useDispatch hook \\
// in our dispatch we import our login and the set (email,uid,displayName,photoUrl) inside of our redux store to userAuth.email userAuth.uid etc...\\



function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();


useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL
      })
    );
    }else {
      dispatch(logout());
    }
  })
}, [])


  return (
    <div className="app">
      <Header />
     
      {!user ? (
      <Login /> 
      ):(
      <div className="app__body">
        <Sidebar />
        <Feed />
      <Widgets />
      </div>
    )}
    </div>
  );
}

export default App;
