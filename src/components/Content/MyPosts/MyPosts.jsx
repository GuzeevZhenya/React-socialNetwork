import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className="posts">
      <Post message="hi"/>
      <Post message="it my "/>
     
    </div>
  );
}
