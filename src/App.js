import React, { Component } from 'react';
import Head from './react/head';
import Body from './react/body';
import BodyInfo from './react/bodyInfo';

import carouselPage from "./react/carouselPage";

import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Head />
          <Route path="/travel" component={Body}/>
          <Route path="/info" component={BodyInfo}/>
          <Route path="/carousel" component={carouselPage} />
        </div>
      </Router>
    );
  }
}

export default App;
