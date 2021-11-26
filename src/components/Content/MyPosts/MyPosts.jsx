import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let postsElements = props.posts.map((item) => {
    return <Post message={item.message} likesCount={item.likesCount} />;
  });

  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    
  }
  return (
    <div className="postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}>Add post</textarea>
          <button onClick = {()=>addPost()}>Add post</button>
        </div>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
}
