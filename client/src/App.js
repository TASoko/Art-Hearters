import React, { useState } from "react";
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route } from "react-router-dom";




function App () {

    return (
      <Router basemname={`/${process.env.PUBLIC_URL}`}>
        <div className="main">
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );

}

export default App;
