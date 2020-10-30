import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import img from '../img/Recurso1.png';
import img2 from '../img/Recurso2.png';


export default class Main extends Component {

  randomImage(){
    let random = Math.floor(Math.random() * 13);
    console.log(random)
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
        <div className="container">
          <div className="row fondo">
            <div className="col-6 contenido">
              <p>¿Cual es mi tipo de piel y que producto debo utilizar?</p>
              <Link className="btn btn-light" to="/test">Empezar Test</Link>
            </div>
            <div className="col-6">
              <img className="Image contenido" src={this.randomImage()} alt="Imagen"></img>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};