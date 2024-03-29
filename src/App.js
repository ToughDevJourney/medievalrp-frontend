import React from "react";
import { Router, Route } from "react-router-dom";
import GameContainer from "./components/game/game-container";
import SignUpContainer from "./components/pages/signup/signup-container";
import SignInContainer from "./components/pages/signin/signin-container";
import history from './helpers/history'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={GameContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/signin" component={SignInContainer} />
      </Router>
    </div>
  );
}

export default App;
