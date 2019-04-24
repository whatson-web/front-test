import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import Regions from "../containers/DisplayGetResult";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Regions" component={Regions} />
    </div>
  </Router>
);

export default routing;
