import React, { Profiler } from "react";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Content from "./components/Content/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { Route,BrowserRouter } from "react-router-dom";

function App(props) {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>} />
          <Route path="/profile" component={() => <Content posts={props.posts}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
