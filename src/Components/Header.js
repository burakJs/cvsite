import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import firebase from '../fire';


function Header() {
  const [isSign,setIsSign] = useState(false)

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setIsSign(true)
      } else {

      }
    });

  const signOut = () => {
      firebase.auth().signOut().then(function() {
          alert('Sign out')
          setIsSign(false)
        }).catch(function(error) {
        });
  }
    
  return (
      <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" style={{'fontSize':25}}>Burak İmdat</a>
        
                <form className="form-inline">
                <Link to="/">
                        <button className="btn btn-success mr-1 ">Ana sayfa</button>
                    </Link>
                    <Link to="/blogs">
                        <button className="btn btn-success mr-1 ">Bloglarım</button>
                    </Link>
                    {!isSign ? 
                    (
                    <Link to="/admin">
                        <button className="btn btn-success mr-1 ">Admin Girişi</button>
                    </Link>
                    ):
                    (
                      <>
                      <Link to="/addblogs">
                        <button className="btn btn-success mr-1 ">Add Blogs</button>
                      </Link>
                      <Link to="/">
                      <button onClick={signOut} className="btn btn-success mr-1 ">Admin Çıkış</button>
                      </Link>
                      </>
                    )}
                </form>
        
       
    </nav>
    
  </>
  );
}

export default Header;
