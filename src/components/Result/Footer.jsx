import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DermoConsejos from '../../img/DermoConsejos.png';

export default class Footer extends Component{
    render() {
        return (
            <div className="footeranswer">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <footeranswer>
                            <Link className="btn btn-light"  style={{margin:'20px', width:'auto'}}>Ingresa aqui</Link>
                            <p>Para agendar tu cita, nuestro equipo de dermoconsejeros te compartirá los mejores consejos y te guiará para encontrar los productos diseñados para tu tipo de piel.</p>
                        </footeranswer>
                    </div>
                    <div className="col-lg-4">
                        <img  src={DermoConsejos} alt="Imagen" height={200}></img>
                    </div>
                </div>
            </div>
        )
    }
};