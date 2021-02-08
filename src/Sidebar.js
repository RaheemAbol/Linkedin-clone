import { Avatar } from '@material-ui/core';
import coolbackground from './images/coolbackground.jpg';
import React from 'react';
import "./Sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

// Imported Avatar from material-ui for the user image underneath will diplay the user name and email\\
// Sidebar__ stats will display a hardcoded values for Who's viewed you and Views on post\\
// The recentItem function returns whatever the jsx {topic} is passed in.  Later invoked in div sidebar bottom ex.{recentItem('------')}\\ 
// In sidebar we import the user from the redux store with  (const user = useSelector(selectUser)) using the useSelector hook and passing in our selectUser \\
// with our user we will pass our user props to our h2 and h4 in our sidebar div {user.email} {user.displayName}



function Sidebar() {
    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
           <div className="sidebar__top">
               <img src={coolbackground} alt=""/>
               <Avatar src={user.photoUrl} className="sidebar__avatar" > {user.email[0]} </Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>


           <div className="sidebar__stats"> 
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,799</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1,895</p>
                </div>
           </div>

           <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('developer')}
                {recentItem('coding')}
                {recentItem('design')}
                {recentItem('programming')}
           </div>
        </div>
    );
}

export default Sidebar;
