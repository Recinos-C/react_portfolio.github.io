import React from "react";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  

  return (
    <Router>
    <div>
      
      <Nav />
      <Switch>
      <Route exact path ="/" component={About} />
      <Route exact path = "/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NoMatch} />
      </Switch>
      <Books />
    </div>
    </Router>
  );
}

export default App;
