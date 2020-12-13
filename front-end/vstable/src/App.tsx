import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from "./pages/home/Home";
import {Header} from "./app/Header";
import {Footer} from "./app/Footer";

import './reset.scss'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path={"/"} component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
