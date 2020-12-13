import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from "./pages/home/Home";

import './reset.scss'

import {Header} from "./app/Header";
import {Footer} from "./app/Footer";


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
