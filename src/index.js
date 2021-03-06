import './index.css';
import store from './redux/state';

import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
 



let renderEntiredTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} updateNewPostText={store.updateNewPostText.bind(store)} addPost={store.addPost.bind(store)}/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderEntiredTree(store.getState());

store.subscribe(renderEntiredTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
