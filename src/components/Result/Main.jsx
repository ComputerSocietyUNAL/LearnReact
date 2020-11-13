import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import SimpleSlider from './Slider';

export default class Main extends Component {

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

    constructor(props){
        super(props);
        this.state={
            stage: 'clean'
        };
    }

    render() {
        const { 
            skinScore,
            //sensibleSkinScore 
        } = this.props.state;
        const idx = this.skinType(skinScore);
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h3 style={{color:'#627892',textAlign:'center'}}>Los productos que te recomendamos para tu rutina de cuidado diario son:</h3> 
                    </div>
                </div>
                <div className="row " style={{width:"100vh", margin:"auto"}}>
                    <Button outline 
                        style={{margin:"auto"}}
                        onClick={ e => this.setState({ stage: "clean"})}> 
                        Limpieza 
                    </Button>
                    <Button outline 
                        style={{margin:"auto"}}
                        onClick={ e => this.setState({ stage: "hydration"})}> 
                        Hidratacion 
                    </Button>
                    <Button outline 
                        style={{margin:"auto"}}
                        onClick={ e => this.setState({ stage: "solarProtection"})}> 
                        Proteccion Solar 
                    </Button>
                </div>
                <div className="justify-content-center">
                    <SimpleSlider data={this.props.data} stage={this.state.stage}/>
                </div>
                <div className="row justify-content-center">
                    <Link 
                        className="btn btn-light"
                        target="_blank" 
                        to={{pathname: this.props.data[idx].pdf}} 
                        style={{margin:'20px', width:'auto', backgroundColor:'#62788D', color:'#FFFFFF'}}>
                        Descarga aquí tu resultado
                    </Link>
                </div>
            </div>
        );
    }
}