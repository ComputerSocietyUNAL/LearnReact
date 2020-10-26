import React, { Component } from 'react';
import { data } from '../data/data';
import Header from './Header';
import Footer from './Footer';
import img from '../logo.svg';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex'
        }
    }

    render() {
        //let { total, question, showButton} = this.state;
        
        return (
            <React.Fragment>    
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="contenedor">
                                <div className="contenido">        
                                    <p>¿Cual es mi tipo de piel y que producto debo utilizar?</p>
                                    <button>Empezar el test ahora</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="Image" src={img} alt="Imagen"></img>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
};