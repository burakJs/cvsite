import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import firebase from '../fire';


function Header() {
    
    
  return (
      <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" style={{'fontSize':25}}>Burak İmdat</a>
        
                <form className="form-inline">
                    <Link to="/blogs">
                        <button className="btn btn-success mr-1 ">Bloglarım</button>
                    </Link>
                    <Link to="/admin">
                        <button className="btn btn-success mr-1 ">Admin Girişi</button>
                    </Link>
                </form>
        
       
    </nav>
    
  </>
  );
}

export default Header;
