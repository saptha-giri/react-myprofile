import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './pages/home';
import About from './pages/About';
import Layout from './components/layout';



const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
