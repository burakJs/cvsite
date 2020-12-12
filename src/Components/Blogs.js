import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import firebase from '../fire';
import '../App.css';



function Blogs() {
  const [datas,setDatas] = useState([]);
  const [isSign,setIsSign] = useState(false);
  var ref = firebase.database().ref('blogs');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setIsSign(true)
    } else {

    }
  });

    useEffect(() => {
      console.log(1);
      var fakeDatas = [];
      const listener = ref.on('value', snap => {
        snap.forEach(data => {
          fakeDatas.push(data.val());
        });
        setDatas(fakeDatas);
      })
        return () => ref.off('value', listener);
      }, [firebase.database()]);


  return (
    <>
        <div className='container'>
          
          {datas ? datas.map((data,i)=>{
            return(
              <>
              <div key={i}>
                <h1>{data.head}</h1>
                {isSign ?
                 (<button className="btn btn-danger" onClick={deleteBlog}>Sil</button>):(<></>)}
                <p>{data.details}</p>
              </div>
              <br/><br/>
              </>
            )
          }):<>Yükleniyor</>}
            
        </div>
    </>
  );
}

export default Blogs;
