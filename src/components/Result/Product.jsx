import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Producto1 from '../../img/Producto1.png'


export default class Product extends Component {
    render(){
        return(
            <Card style={{backgroundColor:"#DADEE2"}}>
                <div className="trapezoid"><p 
                style={{margin:"20%",fontSize:"20px",color:"white"}}>Cuerpo</p></div>
                <CardImg src={Producto1} alt="" />
                <CardBody style={{backgroundColor:"#C4CDD5"}}>
                    <CardText>
                        Probando
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}