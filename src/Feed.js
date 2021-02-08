import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";


// For the feed container we first needed to import the CreateIcon from material-ui and insert it inside of our form to the left of the text input.\\
// We import our InputOption component and pass our destructured props {Icon, title, color} our values in <div className="feed__inputOptions"> || Icons being passed material-ui adn title and color hard coded values \\
// In our Feed function we use the useState Hook to set the state for posts to an emptry array. We then use post.map to render out everytime we have a post 
// In our form we have an event listner onClick that will then target the sendPost function \\
// The sendPost function passes our argument e .preventDefault method to stop the page from rerendering. \\
// We Use the useEffect hook to connect our collection of posts to the database (db.collection()....) the useEffect hook will run once the Feed component loads.\\
// In the useEffect hook we then go into the collection of "posts" and call the .onSnapshot method which gives us a real listner to take a snapshot of the posts collection. Everytime the posts is changed we will get a snapshot. \\
// The .orderBy method we use on "post" in db.collection will set the post in order based on their timestamp and then put it in descending order \\
// Everytime the posts changes we will the update the state with setPosts. In setPosts we pass snapshot.docs.map (mapping through the docs of the collection in db) \\
//^ For every doc inside of the collection we will return our object containing {id:doc.id, data:doc.data()} \\
// Inside of sendPost once we use the event listner or send the post we push our post to the db. We then add an object {name,description,message,photoUrl} to the database \\
// inside of our input field we will map it to state with our useState Hook input (value={input}) then we will use onChange to set the state with {e => setInput(e.target.value)} \\
//^ {e => setInput(e.target.value)} Everytime a user types it fires off an event we then target the input field and grab the value \\
// firebase.firestore.FieldValue.serverTimestamp() inside of timestamp lets us use the same time stamp no matter what time zone you're in. \\
// At the bottom we map through post and destuctor it with id and data. The Key is unique and import to make sure react doesnt rerender the whole list everytime.This makes it so that the element with that indivdual key is then rendered to the list. \\
// setInput('') will then clear the text from the post field after the message is posted \\
// inside of feed we get the user(const user = useSelector(selectUser);) then use the destructed props to display our info into our ( db.collection('posts')) ex...(name: user.displayName,) \\
// Towards the bottom on our posts we import our flipmove animation || when you deal with these animations you need reference to the object, us wrapping our child component Post inside of our fowardRef hook. \\



function Feed() {
const user = useSelector(selectUser);
const [input, setInput] = useState('');
const [posts, setPosts] = useState([]);


useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
        setPosts(
         snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })))
      )
    );
}, []);


const sendPost = (e) => {
    e.preventDefault();
    
    db.collection('posts').add({
        name: user.displayName,
        description: user.email,
        message: input, 
        photoUrl: user.photoUrl || "",
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

setInput("");
};




    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost}type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {/* {posts} */}
            <FlipMove>
            {posts.map(({ id, data: { name, description,message,photoUrl} }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
                ))}
            </FlipMove>
           
        </div>
    )
}

export default Feed;
