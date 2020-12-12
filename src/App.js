import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Components/Header';
import Main from './Components/Main';


function App() {
  return (
    <Router>
      <Header/>
      <br/><br/><br/><br/>
        <Switch>
          
          <Route path="/" exact component={Main}/>

        </Switch>
    </Router>
  );
}

export default App;
