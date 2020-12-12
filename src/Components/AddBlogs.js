import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import firebase from '../fire';
import '../App.css';

function AddBlogs() {

    const [row,setRow] = useState(1);
    var [header,setHeader] = useState("");
    var [details,setDetails] = useState("");
    //const [datas,setDatas] = useState([]);
    var ref = firebase.database().ref('blogs');

    const checkRow = (text) =>{
        setDetails(text);
        //console.log((Math.floor((text.length)/162))+1);
        setRow((Math.floor((text.length)/100))+1)
    }

    const addData = () => {
        var fakeDatas = {
            "head":header,
            "details":details
        }
        
        ref.push(fakeDatas);
    }


    return(
        <div className="container">
            <form>
            <div className="form-group">
                <label >Blog Başlığı</label>
                <input type="text" onChange={e => setHeader(e.target.value)} className="form-control" />
                </div>
            <div className="form-group">
                <label >Blog Detayı</label>
                <textarea className="form-control" onChange={e => checkRow(e.target.value)} id="exampleFormControlTextarea1" rows={row}></textarea>
            </div>

            <button className="btn btn-primary " onClick={addData}>Add Blog</button>
            </form>
        </div>
    )
}

export default AddBlogs;