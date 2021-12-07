import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/style.scss";

function App() {
  return <div className="App">
    <Router>
      <Router path="/" component={LandingPage}></Router>
    </Router>
  </div>;
}

export default App;
