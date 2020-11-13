import React, {Component} from 'react';
import PielGrasa from '../../img/PielGrasa.png';
import PielMixta from '../../img/PielMixta.png';
import PielMuySeca from '../../img/PielMuySeca.png';
import PielNormal from '../../img/PielNormal.png';
import PielSeca from '../../img/PielSeca.png';
import PielSensible from "../../img/PielSensible.png";

export default class Header extends Component{

    ImageArray = [ 
        PielSensible,
        PielMuySeca,
        PielSeca,
        PielGrasa,
        PielMixta,
        PielNormal
    ];

    skinType(score){
        if(score <= 9){
            return 1
        } else if (score <= 12) {
            return 2
        } else if (score <= 16) {
            return 3
        } else if (score <= 24) {
            return 4
        } else {
            return 5
        }
    }

    render() {
        
        const { 
            skinScore,
            //sensibleSkinScore 
        } = this.props.state;

        const idx = this.skinType(skinScore);
        const data = this.props.data;
        /* console.log(data); */
        
        return (
            <div>
                <div className="row fondo justify-content-center">
                    <div className="col-6 headerContenido text-center" style={{padding:'30px'}}>
                        <img className="Image contenido" src={this.ImageArray[idx]} alt="Imagen" style={{width:"80%"}}></img>
                    </div>
                    <div className="col-6" style={{paddingRight:"30vh", paddingTop:"5vw"}}>
                        <p>{data[idx].inicio}</p>
                        <h1>{data[idx].skinResult}</h1>
                        <hr/>
                        <p> <strong>Piel {data[idx].skinResult}: </strong>{data[idx].description}</p>
                    </div>
                </div>
            </div>
        )
    }
};