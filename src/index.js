import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
  { id: 1, message: "by", likesCount: 12 },
  { id: 2, message: "lol", likesCount: 12 },
  { id: 3, message: "heh", likesCount: 12 },
  { id: 4, message: "ah", likesCount: 12 },
  { id: 5, message: "erger", likesCount: 12 },
];
let dialogs = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Zhenya" },
  { id: 3, name: "Vadim" },
  { id: 4, name: "Fedor" },
  { id: 5, name: "Vania" },
];

let messages = [
  { id: 1, message: "hi" },
  { id: 2, message: "Wtf" },
  { id: 3, message: "ye" },
  { id: 4, message: "i love" },
  { id: 5, message: "killer" },
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
