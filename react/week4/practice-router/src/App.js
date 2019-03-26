import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {About, Home, Contacts, Error, Navigation} from "./components/components"

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
              <Navigation />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
                <Route component={Error}/>
              </Switch>
            </Router>
        );
    }
}

export default App;
