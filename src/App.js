import React, { Component } from "react";
import {
  withRouter,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Layout5/Layout5";
import PrivacyPolicy from "../src/pages/PrivacyPolicy";

//import style
import "./assets/css/pe-icon-7.css";

import "./assets/scss/themes.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/politicas-de-privacidad">
              <PrivacyPolicy />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
