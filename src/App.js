import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "../src/components/Feed";
import Widgets from "../src/components/Widgets";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;