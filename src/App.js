

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shortterm from "./components/Shortterm";
import Midterm from "./components/Midterm";
import Longterm from "./components/Longterm";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="topheading">
        <h3> Al generated portfolios</h3>
        <p>
          AI has generated few potential portfolios suiting your financial and
          investment details
        </p>
      </div>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Shortterm}>
            <Shortterm />
          </Route>
          <Route path="/midterm" component={Midterm}>
            <Midterm />
          </Route>
          <Route path="/longterm" component={Longterm}>
            <Longterm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;

