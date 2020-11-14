import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";
import img from '../img/Recurso1.png';
import img2 from '../img/Recurso2.png';

export default class Main extends Component {

  randomImage(){
    let random = Math.floor(Math.random() * 13);
    // console.log(random)
    if(random % 2 === 0){
      return img
    } else {
      return img2
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
          <div className="row fondo" style={{margin:'auto', width:'95%'}}>
            <div className="col-md-6 contenido text-center" style={{padding:'50px'}}>
              <p style={{color:"#8F8070"}}>¿Cuál es mi tipo de piel y qué producto debo utilizar?</p>
              <Link className="btn btn-light" to="/test" style={{margin:'auto', width:'30%'}}>Empezar Test</Link>
            </div>
            <div className="col-md-6">
              <img className="Image contenido" src={this.randomImage()} alt="Imagen"></img>
            </div>
          </div>
        <Footer/>
      </React.Fragment>
    );
  }
};