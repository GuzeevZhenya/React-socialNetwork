import React, { Profiler,Switch} from "react";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Content from "./components/Content/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {

  
  return (
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
            <Route path="/profile" render={() => <Content state={props.state.profilePage} addPost={props.addPost} />} />
          </div>
        </div>
  );
}

export default App;
