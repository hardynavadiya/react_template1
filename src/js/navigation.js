import React from "react";
import "../css/navigation.css";
import Home from "./home";
import Team from "./team";
import Work from "./work";
import Price from "./price";
import Contact from "./contact";
import Map from "./map";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./footer";
import Materialui from "./materialui";

const Navigation = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/team">team</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/price">Price</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <li>
            <Link to="/materialui">materialui</Link>
          </li>

          <li className="dropdown1">
            <a href="link" className="dropbtn1">
              Dropdown
            </a>
            <div className="dropdown-content1">
              <a href="link">Link 1</a>
              <a href="link">Link 2</a>
              <a href="link">Link 3</a>
            </div>
          </li>
          <a href="link" className="search1">
            <i class="fa fa-search"></i>
          </a>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team">
            <Team />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/price">
            <Price />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/map">
            <Map />
          </Route>

          <Route path="/footer">
            <Footer />
          </Route>

          <Route path="/materailui">
            <Materialui />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
