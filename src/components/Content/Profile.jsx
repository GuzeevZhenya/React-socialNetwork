import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {
 console.log(props)
  return (
    <div className="content">
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
}
