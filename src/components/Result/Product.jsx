import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

export default class Product extends Component {
    render(){
        const { id, idx, stage, data } = this.props;
        return(
            <Card className="CardStyle" style={{backgroundColor:"#DADEE2"}}  >
                <div className="trapezoid">
                    <p style={{margin:"6%",marginLeft:"-20%",fontSize:"14px",color:"white",fontFamily:"Poppins-Regular"}}>
                    {data[id][stage][idx].type}
                    </p>
                </div>
                <CardImg src={data[id][stage][idx].image} alt=""  />
                <CardBody style={{backgroundColor:"#C4CDD5"}}>
                    <CardText style={{fontFamily:"Poppins-ExtraLight"}}>
                        {data[id][stage][idx].description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}