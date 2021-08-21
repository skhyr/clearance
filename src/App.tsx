import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Excursions } from "./screens/Excursions";
import { Excursion } from "./screens/Excursion";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Excursions} />
        <Route path="/excursion" component={Excursion} />
      </Router>
    </div>
  );
}

export default App;
