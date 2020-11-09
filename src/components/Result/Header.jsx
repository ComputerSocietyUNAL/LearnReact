import React, {Component} from 'react'
import header from '../../img/header.png';

export default class Header extends Component{
    render() {
        return (
            <div className="row fondo" style={{margin:'auto', width:'95%'}}>
                <div className="col-3 contenido text-center" style={{padding:'50px'}}>
                    <img className="Image contenido" src={header} alt="Imagen"></img>
                </div>
                <div className="col-9">
                    <p>¿Cuál es mi tipo de piel y qué producto debo utilizar?</p>
                </div>
            </div>
        )
    }
};