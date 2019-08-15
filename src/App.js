import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Routes from "./Routes";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;
