import React from 'react';
import './TweetBox.css';
import { Button, Avatar } from "@material-ui/core";
import Post from './Post'


const TweetBox = () => {
    return (
        <>
        <div className="tweetBox">
           <form>
               <div className="tweetBox__input">
                   <Avatar src="https://pbs.twimg.com/profile_images/1361488034676568066/IPn5vusI_400x400.jpg"></Avatar>
                   <input placeholder="whats happening"></input>

               </div>
               <input placeholder="Enter image url" className="tweetBox__imageInput"></input>
               <Button className="tweetBox__tweetButon">Tweet</Button>
           </form>

        </div>
        </>
    )
}

export default TweetBox
