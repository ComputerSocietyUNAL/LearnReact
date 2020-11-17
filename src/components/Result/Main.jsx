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
    onBtnClk(rSelected){
        this.setState({rSelected});
    }

    constructor(props){
        super(props);
        this.state={
            stage: 'clean'
        };
        this.onBtnClk= this.onBtnClk.bind(this);
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
                    <div className="col-4">
                        <h3 style={{color:'#627892',textAlign:'center',fontFamily:"Poppins-SemiBold",marginTop:"10px"}}>
                            Los productos que te recomendamos para tu rutina de cuidado diario son:
                        </h3> 
                    </div>
                </div>
                <div className="row " style={{width:"100vh", margin:"auto"}}>
                    <Button outline
                        aria-pressed="true"
                        active={this.state.rSelected === 1}
                        style={{margin:"auto",marginBottom:"5vh"}}
                        onClick={ e => {
                            this.onBtnClk(1)
                            this.setState({ stage: "clean"})}}> 
                        Limpieza 
                    </Button>
                    <Button outline
                        active={this.state.rSelected === 2}
                        style={{margin:"auto",marginBottom:"5vh"}}
                        onClick={ e => {
                            this.onBtnClk(2)
                            this.setState({ stage: "hydration"})}}> 
                        Hidratacion 
                    </Button>
                    <Button outline
                        active={this.state.rSelected === 3}
                        style={{margin:"auto",marginBottom:"5vh"}}
                        onClick={ e => {
                            this.onBtnClk(3)
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