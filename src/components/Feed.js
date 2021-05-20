import React from "react";
import "./Feed.css";
import TweetBox from './TweetBox'
import { Button, Avatar } from "@material-ui/core";
import Post from './Post'
const Feed = () => {
  return (
      <div className="feed">
    <div className="feed__header">
      {/* header */}
        <h2>Home</h2>
      </div>
      <TweetBox />
      {/* tweet box */}
    <Post/>
    <Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/><Post/>

      {/* tweet box */}
    </div>
  );
};

export default Feed;
