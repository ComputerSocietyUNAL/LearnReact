import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DermoConsejos from '../../img/DermoConsejos.png';

export default class Footer extends Component{
    render() {
        return (
            <div className="footeranswer">
                <div className="row justify-content-around">
                    <div className="col-3">
                        <footeranswer>
                            <Link className="btn btn-light" to={{pathname: "https://www.facebook.com/cetaphilcolombia/posts/3938296362865534"}} target="_blank" style={{margin:'20px', width:'auto', backgroundColor:'#13AAB2', color:'#FFFFFF'}}>Ingresa aqui</Link>
                            <p>Para agendar tu cita, nuestro equipo de dermoconsejeros te compartirá los mejores consejos y te guiará para encontrar los productos diseñados para tu tipo de piel.</p>
                        </footeranswer>
                    </div>
                    <div className="col-3" >
                        <img  src={DermoConsejos} alt="Imagen" height={200}></img>
                    </div>
                </div>
            </div>
        )
    }
};