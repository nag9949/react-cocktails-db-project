import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import navbar
import Navbar from "./components/Navbar";

// app component
export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Switch for Routing */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
