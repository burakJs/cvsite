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
    var [headColor,setHeadColor] = useState("");
    var [detailsColor,setDetailsColor] = useState("");

    //const [datas,setDatas] = useState([]);
    const [isSign,setIsSign] = useState(false)

    var ref = firebase.database().ref('blogs');

    const checkRow = (text) =>{
        setDetails(text);
        //console.log((Math.floor((text.length)/162))+1);
        setRow((Math.floor((text.length)/100))+1)
    }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setIsSign(true)
    } else {

    }
  });
  
    const addData =  () => {

            var date = new Date();

            var fakeDatas = {
                "id":'0',
                "head":header,
                "details":details,
                "date":date.toLocaleDateString(),
                "headColor":headColor,
                "detailsColor":detailsColor
            }

            var pushingKey = ref.push(fakeDatas).key;
            
            ref.child(pushingKey).set({
                "id":pushingKey,
                "head":header,
                "details":details,
                "date":date.toLocaleDateString(),
                "headColor":headColor,
                "detailsColor":detailsColor
            })
    }


    return(
        <div className="container">
            {isSign ? 
            (
            <form>
            <div className="form-group">
                <label >Blog Başlığı</label>
                <input type="text" onChange={e => setHeader(e.target.value)} className="form-control" />
                <input type="color" onChange={e => setHeadColor(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label >Blog Detayı</label>
                <textarea className="form-control" onChange={e => checkRow(e.target.value)} id="exampleFormControlTextarea1" rows={row}></textarea>
                <input type="color" onChange={e => setDetailsColor(e.target.value)}></input>
            </div>

            <button className="btn btn-primary " onClick={addData}>Blog Ekle</button>
            </form>
            ):
            (
                <div class="alert alert-danger " role="alert">
                    <h1>Lütfen Giriş Yapınız</h1>
                </div>
            )}
        </div>
    )
}

export default AddBlogs;