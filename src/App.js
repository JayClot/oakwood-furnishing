import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const SofaPage = () => (
  <div>
    <h1>SOFAS!!!</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sofas" component={SofaPage} />
      </Switch>
    </div>
  );
}

export default App;
