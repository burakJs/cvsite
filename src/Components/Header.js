import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import firebase from '../fire';


function Header() {
    
    
  return (
      <>
    <nav className="navbar navbar-light bg-light fixed-top">
        <a className="navbar-brand">Burak İmdat</a>
        
                <form className="form-inline">
                    <Link to="/blogs">
                        <button className="btn btn-success mr-1 ">Blogs</button>
                    </Link>
                    <Link to="/details">
                        <button className="btn btn-success mr-1 ">Details</button>
                    </Link>
                    <Link to="/admin">
                        <button className="btn btn-success mr-1 ">Admin Login</button>
                    </Link>
                </form>
        
       
    </nav>
    
  </>
  );
}

export default Header;
