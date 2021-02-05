import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Achievement from "./components/Achievements";
import Media from "./components/Media";
import ContactUs from "./components/ContactUs/App";
import AboutUs from "./components/AboutUs/App";
import Teams from "./components/Teams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alumni from "./components/Alumni";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/achievements" component={Achievement} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/alumni" component={Alumni} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/teams" component={Teams} />
      </Switch>
    </Router>
  );
}

export default App;
