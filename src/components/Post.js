import React from 'react'
import './Post.css';
import { Button, Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({
    displayName,
    username,
    verified,
    text,
    timestamps,
    image,
    avatar,
    comment,
    like,
    retweet
}) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar  src="https://pbs.twimg.com/profile_images/1361488034676568066/IPn5vusI_400x400.jpg"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Tofunmi <span><VerifiedUserIcon className="post__badge"/>  </span><span className="post__headerSpecial"> @tofunmi_boy </span></h3>
                    </div>
                <div className="post__headerDescription">
                    <p>I challenge yoou to build a twitter clone</p>
                </div>
                </div>
                <img src="https://media.giphy.com/media/H6F9hJE7UeRi05GLQz/giphy.gif" alt="" srcset=""/>
                <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
