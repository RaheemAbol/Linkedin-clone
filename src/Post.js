import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import "./Post.css";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from "./InputOption";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

// In our post function we pass destructed props to our forwardRef hook ->  forwardRef(({ name, description, message, photoUrl}, ref) \\
// In the "post__buttons" container we import our InputOption component and pass is values for (Icon, title, color)\\
// In the "post__header" container we pass in our destructured props \\
// inside of our Avatar we will post the photoUrl if there isn't one then we will post the users name \\
// in our Post function we use the forwardRef hook. Then calling the ref in the div "post" with ref={ref} . this will lead to our flipmove animation inside of our feed component\\


const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}> {name[0]} </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
             </div>

             <div className="post__body">
                    <p>{message}</p>
             </div> 

             <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
             </div>
        </div>
    )
})

export default Post
