import React, {Component} from 'react';
import PielGrasa from '../../img/PielGrasa.svg';
import PielMixta from '../../img/PielMixta.svg';
import PielMuySeca from '../../img/PielMuySeca.svg';
import PielNormal from '../../img/PielNormal.svg';
import PielSeca from '../../img/PielSeca.svg';
import PielSensible from "../../img/PielSensible.svg";

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
        if(score <= 8){
            return 1
        } else if (score <= 12) {
            return 2
        } else if (score <= 16) {
            return 3
        } else if (score <= 20) {
            return 4
        } else {
            return 5
        }
    }

    render() {
        
        const { 
            skinScore,
            sensibleSkinScore 
        } = this.props;

        const idx = sensibleSkinScore > 1 ? 0 : this.skinType(skinScore);
        const data = this.props.data;
        
        return (
            <div style={{marginBottom:"0px"}}>
                <div className="row resultFondo" style={{backgroundColor:data[idx].configStyle[0],margin:"0px"}}>
                    <div className="col-md-6 headerImg text-center">
                        <img className="Image resultImg imageHeader" src={this.ImageArray[idx]} alt="Imagen" style={{width:"75%" , /* marginTop:"-40px", marginRight:"-10%" */}}></img>
                    </div>
                    <div className="col-md-6 resultContenido text-center">
                        <p className="resultText" style={{
                            fontFamily:"Poppins-Medium",
                            color:data[idx].configStyle[1],
                            }}>
                            {data[idx].inicio}
                        </p>
                        <h1 className="resultTitle" style={{
                            fontFamily:"Poppins-Medium",
                            fontSize: 'calc(4rem + 4vw)',/*"11vw",8rem 131px*/
                            color:data[idx].configStyle[1],
                            }}>
                            {data[idx].skinResult}
                        </h1>
                        <hr style={{
                            marginLeft:"-20%",
                            marginBottom:"4%"
                            }}/>
                        <p className="resultText" style={{
                            fontFamily:"Poppins-Regular",
                            color:data[idx].configStyle[1],
                            paddingRight:"4.5vw"
                            }}> 
                            <strong>Piel {data[idx].skinResult}: </strong>{data[idx].description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};