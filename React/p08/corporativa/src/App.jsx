import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from './components/Form';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={Form} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;