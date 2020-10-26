import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import img from '../logo.svg';
import Questionary from './Questionary';

export default class Main extends Component {

    
    render() {
        
        return (
            <React.Fragment>    
                <Header/>
                
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="contenido">        
                                    <p>¿Cual es mi tipo de piel y que producto debo utilizar?</p>
                                    <Link to="/test">Empezar Test</Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="Image contenido" src={img} alt="Imagen"></img>
                            </div>
                        </div>
                    </div>
                
                <Footer/>
            </React.Fragment>
        );
    }
};