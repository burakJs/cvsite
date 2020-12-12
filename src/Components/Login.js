import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import firebase from '../fire';
import '../App.css';


function SignIn() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [err,setErr] = useState("");

    const login =() => {
        firebase.auth().signInWithEmailAndPassword(email, pass).then(()=>{
          alert("Sign In");
        }).catch(function(error) {
          setErr(error);
          alert(err);
        });
        
    }
  return (
    <div className="container mt-5">
            <div className="form-group">
                <label >Email address</label>
                <input type="email" onChange={(e) => {setEmail(e.target.value)} } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" onChange={(e) => {setPass(e.target.value)}} className="form-control" id="exampleInputPassword1" />
            </div>
            <Link to="/">
            <button  className="btn btn-primary" onClick={login} >Sign In</button>
            </Link>
           
   </div>
  );
}

export default SignIn;
