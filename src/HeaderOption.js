import React from 'react'
import './HeaderOption.css';
import  { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

//HeaderOption props include avatar, Icon, title, onClick are destructed propertys. Meaning You want need to pass them useing(props.)\\
//Line 17 uses an if statement with && to say if we're passed an Icon then render Icon\\
//line 19 uses the same expression to render the avatar on the right hand side\\
//h3 displays the title with the passed down prop of title\\
// in our HeaderOption we pass an onClick event listner to the me avatar(icon) in the top right of the app \\
// we pass our user in with the useSelector method and pass our selectUser into our useSelector method \\
// in our avatar we set the icon to optional chaining if you dont have an image it will be set to the first letter of your email {user?.email[0]} \\


function HeaderOption({  avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);


    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
             < Avatar className='headerOption__icon' >{user?.email[0]} </ Avatar>
             )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
}

export default HeaderOption;
