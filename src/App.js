import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Components/Header';
import Main from './Components/Main';
import Blogs from './Components/Blogs';
import Login from './Components/Login';
import AddBlogs from './Components/AddBlogs';


function App() {
  return (
    <Router>
      <Header/>
      <br/><br/><br/><br/>
        <Switch>
          
          <Route path="/" exact component={Main}/>
          <Route path="/blogs" exact component={Blogs}/>
          <Route path="/admin" exact component={Login}/>
          <Route path="/addblogs" exact component={AddBlogs}/>
        </Switch>
    </Router>
  );
}

export default App;
