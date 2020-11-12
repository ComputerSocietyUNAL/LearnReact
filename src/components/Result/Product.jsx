import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';



export default class Product extends Component {
    render(){

        const data = this.props.data;
        const idx = 0; // falta definir como pasar este valor :v
        const id= 0; //toca mirar segun logica si es igual a idx 

        return(
            <Card style={{backgroundColor:"#DADEE2"}}>
                <div className="trapezoid"><p 
                style={{margin:"20%",fontSize:"20px",color:"white"}}>Cuerpo</p></div>
                <CardImg src={data[id].clean[idx].image} alt="" />
                <CardBody style={{backgroundColor:"#C4CDD5"}}>
                    <CardText>
                        {data[id].clean[idx].description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}