import React from "react";
import "./Post.css";

export default function Post(props) {
  return (
    <div className="posts">
      <div className="post-item">{props.message}</div>
    </div>
  );
}
