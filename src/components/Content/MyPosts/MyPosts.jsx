import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let postsElements = props.posts.map((item) => {
    return <Post message={item.message} likesCount={item.likesCount} />;
  });
  return (
    <div className="postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea>Add post</textarea>
        </div>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
}
