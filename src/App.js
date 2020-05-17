import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CanvasContainer from "./components/canvas/canvas-container";
import SignUpContainer from "./components/pages/signup/signup-container";
import SignInContainer from "./components/pages/signin/signin-container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={CanvasContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/signin" component={SignInContainer} />
      </Router>
    </div>
  );
}

export default App;
