import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import SimpleSlider from './Slider';

export default class Main extends Component {

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
            sensibleSkinScore
        } = this.props;
        const idx = sensibleSkinScore > 1 ? 0 : this.skinType(skinScore);
        return(
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <h3 style={{color:'#627892',textAlign:'center',fontFamily:"Poppins-SemiBold",marginTop:"10px"}}>
                            Los productos que te recomendamos para tu rutina de cuidado diario son:
                        </h3> 
                    </div>
                </div>
                <div className="row col-md-8 col-7 justify-content-center" style={{width:"100vw",margin:"auto", marginBottom:"5vh"}}>
                    <Button outline
                        aria-pressed="true"
                        active={this.state.stage === 'clean'}
                        style={{margin:"auto",marginBottom:"10px"}}
                        onClick={ e => {
                            this.setState({ stage: "clean"})}}> 
                        Limpieza 
                    </Button>
                    <Button outline
                        active={this.state.stage === 'hydration'}
                        style={{margin:"auto",marginBottom:"10px"}}
                        onClick={ e => {
                            this.setState({ stage: "hydration"})}}> 
                        Hidratacion 
                    </Button>
                    <Button outline
                        active={this.state.stage === 'solarProtection'}
                        style={{margin:"auto",marginBottom:"10px"}}
                        onClick={ e => {
                            this.setState({ stage: "solarProtection"})}}> 
                        Proteccion Solar 
                    </Button>
                </div>
                <div className="justify-content-center">
                    <SimpleSlider data={this.props.data} stage={this.state.stage} id={idx}/>
                </div>
                <div className="row justify-content-center">
                    <Link 
                        className="btn btn-light"
                        target="_blank" 
                        to={{pathname: this.props.data[idx].pdf}} 
                        style={{margin:'20px', width:'auto', backgroundColor:'#62788D', color:'#FFFFFF',fontFamily:"Poppins-SemiBold"}}>
                        Descarga aquí tu resultado
                    </Link>                    
                </div>
            </div>
        </React.Fragment>
        );
    }
}