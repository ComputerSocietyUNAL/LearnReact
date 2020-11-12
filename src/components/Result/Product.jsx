import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';



export default class Product extends Component {
    render(){

        const data = this.props.data;
        const id = this.props.id;
        const idx = this.props.idx;
        var stage='clean';
        if (stage=='clean'){
            var dato=data[id].clean[idx]
        }
        if(stage=='hydration'){
            var dato=data[id].hydration[idx]
        }
        if(stage=='solarProtection'){
            var dato=data[id].solarProtection[idx]
        }
        return(
            <Card style={{backgroundColor:"#DADEE2"}}>
                <div className="trapezoid"><p 
                style={{margin:"6%",fontSize:"15px",color:"white"}}>{dato.type}</p></div>
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