import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Achievement from "./components/Achievements";
import Media from "./components/Media";
import AboutUs from "./components/AboutUs/App";
import Teams from "./components/Teams/App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/achievements" component={Achievement} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/teams" component={Teams} />
      </Switch>
    </Router>
  );
}

export default App;
