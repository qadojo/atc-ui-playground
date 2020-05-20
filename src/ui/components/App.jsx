import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CatRequestPage from "./App/CatRequestPage";
import CatRequestSuccessPage from "./App/CatRequestSuccessPage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/success">
            <CatRequestSuccessPage />
          </Route>
          <Route path="/">
            <CatRequestPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
