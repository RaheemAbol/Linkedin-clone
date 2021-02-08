import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';


// in our Login we map our states (email, password, name, profilePic) to the appropriate fields in the input of form ex.(value={name})\\
// then set the state with the onChange ex.(onChange={(e) => setName(e.target.value)})\\
// inside of the register function we if there was no name we return an alert\\
//^then we pass in auth from firebase and use the createUserWithEmailAndPassword method passing in email adn password args.\\
// If the user is created in the .then successfully we're going to update the users profile by adding a picture { displayName: name, photoURL: profilePic }\\
//^ displayName & photoURL are keys that refer to firebase. We attach our local state to them with name & profilePic \\
// then we push the user into the redux store with our dispatch(login) importing the login action from userSlice \\
// the login action will have a catch error incase any problem occurs alerting an error \\
// in our login__register span we target the register fuction with the onClick event listener \\
// in the submit button we target the loginToApp function with the onClick event listener \\
// inside of the loginToApp function we pass e.preventDefault to prevent a refresh \\
// we then pass the signInWithEmailAndPassword method to the auth. We then get a user identification object and then dispatch it into redux.. if there's an error then we will catch it with  .catch((error) => alert(error))\\


function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [profilePic, setProfilePic] = useState("");
const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            })
          );
        })
        .catch((error) => alert(error));
    };
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(Login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            });
        }).catch((error) => alert(error));
    };
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
        
        <form>
            <input value={name} onChange={(e) => setName(e.target.value)}  placeholder="full name (required if registering)" type="text" />
       
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text"/>

            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
       
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>

            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
       
        


        </div>
        
    );
    
}

export default Login;
