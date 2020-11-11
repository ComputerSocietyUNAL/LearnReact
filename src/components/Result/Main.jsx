import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return(
            <div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h3 style={{color:'#627892',textAlign:'center'}}>Los productos que te recomendamos para tu rutina de cuidado diario son:</h3> 
                    </div>
                </div>
                <div className="row justify-content-center">
                    <p>Aqui iria el slider ese culero :v</p>
                </div>
                <div className="row justify-content-center">
                    <p>Aqui estaria el carrusel de la contratacion... espera khe?</p>
                </div>
                <div className="row justify-content-center">
                    <Link className="btn btn-light" style={{margin:'20px', width:'auto', backgroundColor:'#62788D', color:'#FFFFFF'}}>Descarga aquí tu resultado</Link>
                </div>
            </div>
        );
    }
}