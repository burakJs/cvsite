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
    var fakeDatas = [];
    const listener = ref.on('value', snap => {
      snap.forEach(data => {
        fakeDatas.push(data.val());
      });
      setDatas(fakeDatas);
    })
      return () => ref.off('value', listener);
    }, [firebase.database()]);

  const deleteBlog = (data) => {
    ref.child(data.id).remove();
    window.location.reload();
  }

  return (
    <>
        <div className='container'>
          
          {datas ? datas.map((data,key)=>{
            return(
              <>
              <div className='container w-75 ' key={key}>
                <h1 style={{'color':data.headColor}}><b>{data.head}</b></h1>
                {isSign ?
                 (<button className="btn btn-danger" onClick={()=>deleteBlog(data)}>Sil</button>):(<></>)}
                <h5 style={{'color':data.detailsColor}} ><b>{data.details}</b></h5>
                <p style={{'textAlign':'right','color':'gray'}}>{data.date}</p>
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
