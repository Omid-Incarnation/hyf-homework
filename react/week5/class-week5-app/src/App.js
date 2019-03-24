import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {About, Home, Profile} from "./routes"

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/profile/:username" exact component={Profile} />
      </Router>
    );
  }
}

export default App;
