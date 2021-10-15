import React from "react";
import "./Content.css";
import MyPosts from "./MyPosts/MyPosts";

export default function Content() {
  return (
    <div className="content">
      <MyPosts />
    </div>
  );
}
