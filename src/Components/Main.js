import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import firebase from '../fire';
import '../App.css';

import EducationPNG from '../Assets/education.png';
import EventsPNG from '../Assets/events.png';
import LanguagesPNG from '../Assets/languages.jpeg';
import GithubPNG from '../Assets/github.png';
import ProjectsPNG from '../Assets/projects.png';

function Main() {
    
  return (
    <>
        <div className='container'>
            <div className="row">
                <div class="col-sm-3">
                    <div className="card">
                    <img src={EducationPNG} style={{'height':225}}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Eğitim</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Manisa Celal Bayar Üniversitesi<br/>- 2020-... -</li>
                            <li className="list-group-item">Eskişehir Muzaffer Çil Anadolu Lisesi<br/>- 2016-2020 -</li>
                            <li className="list-group-item">Eskişehir İkiEylül İlkokul ve Ortaokul</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div className="card">
                    <img src={EventsPNG} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Etkinlikler</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> Kulüp GitHub Eğitimi <br/>- 15 Kasım -</li>
                            <li className="list-group-item">Onur Kemal Koç Röportaj<br/>- 15 Kasım -</li>
                            <li className="list-group-item"> C Eğitimi <br/> - 21 Kasım -</li>
                            <li className="list-group-item"> C# Eğitimi <br/> - 28,29 Kasım -</li>
                            <li className="list-group-item"> Furkan Katı sohbet <br/> - 6 Aralık -</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div className="card">
                    <img src={LanguagesPNG} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Yazılım Dilleri</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> Python <br/> - Başlangıç,Orta -</li>
                            <li className="list-group-item"> Javascript <br/> - Orta -</li>
                            <li className="list-group-item"> ReactJS <br/> - Orta -</li>
                            <li className="list-group-item"> C# <br/> - Başlangıç,Orta -</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div className="card">
                    <img src={ProjectsPNG} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Projeler</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> 
                                CV Site <br/> 
                                - Yükleniyor... -
                                <br/>
                                <a href="https://github.com/burakJs/cvsite">
                                    <img src={GithubPNG} style={{'width':30,'height':30}}/>
                                    </a>
                            </li>
                            <li className="list-group-item"> 
                            BlogB <br/> 
                            - Yükleniyor... -<br/>
                            <a href="https://github.com/burakJs/cvsite">
                                <img src={GithubPNG} style={{'width':30,'height':30}}/>
                            </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Main;
