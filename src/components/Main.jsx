import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import img from '../logo.svg';

export default class Main extends Component {
    
    render() {
        
        return (
            <React.Fragment>    
                <Header/>
                {
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="contenido">        
                                    <p>¿Cual es mi tipo de piel y que producto debo utilizar?</p>
                                    <button>Empezar el test ahora</button>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="Image contenido" src={img} alt="Imagen"></img>
                            </div>
                        </div>
                    </div>
                }
                <Footer/>
            </React.Fragment>
        );
    }
};