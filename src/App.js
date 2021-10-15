import React from "react";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Content from "./components/Content/Content.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
