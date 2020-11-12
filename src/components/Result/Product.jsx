import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';



export default class Product extends Component {
    render(){
        var id =this.props.id;
        var idx = this.props.idx;
        var stage = this.props.stage;
        var dato = this.props.dato;
        var data = this.props.data;
        if (stage==='clean'){
            dato=data[id].clean[idx]
        }
        if(stage==='hydration'){
            dato=data[id].hydration[idx]
        }
        if(stage==='solarProtection'){
            dato=data[id].solarProtection[idx]
        }
        return(
            <Card style={{backgroundColor:"#DADEE2"}}>
                <div className="trapezoid"><p style={{margin:"6%",fontSize:"15px",color:"white"}}>
                    {dato.type}
                </p></div>
                <CardImg src={dato.image} alt="" />
                <CardBody style={{backgroundColor:"#C4CDD5"}}>
                    <CardText>
                        {dato.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}