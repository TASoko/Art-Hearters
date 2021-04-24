import React from "react"; // , { useState }     <-- took out useState for now since it wasn't being used, react warnings annoying
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Explore from './pages/explore';
import LoggedIn from './pages/loggedin';
import Project from './pages/project';
import NewProject from "./pages/newproject";
import Card from "./components/Card/card";
import Job from './pages/jobs';
import Event from './pages/events';
import NewJob from './pages/newjob';
import NewEvent from "./pages/newevent";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App () {

    return (
      <Router basemname={`/${process.env.PUBLIC_URL}`}>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/loggedIn" component={LoggedIn} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/newproject" component={NewProject} />
          <Route exact path="/card" component={Card} />
          <Route exact path="/jobs" component={Job} />
          <Route exact path="/events" component={Event} />
          <Route exact path="/newjob" component={NewJob} />
          <Route exact path="/newevent" component={NewEvent} />
        </div>
      </Router>
    );

}

export default App;
