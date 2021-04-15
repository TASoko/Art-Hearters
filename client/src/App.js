import React, { useState } from "react";
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Explore from './pages/explore';
import { BrowserRouter as Router, Route } from "react-router-dom";




function App () {

    return (
      <Router basemname={`/${process.env.PUBLIC_URL}`}>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/explore" component={Explore} />
        </div>
      </Router>
    );

}

export default App;
