import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

export default class Product extends Component {
    render(){
        const { id, idx, stage, data } = this.props;
        return(
            <Card className="CardStyle" style={{backgroundColor:"#DADEE2"}}  >
                <div className="trapezoid"><p style={{margin:"6%",fontSize:"15px",color:"white"}}>
                    {data[id][stage][idx].type}
                </p></div>
                <CardImg src={data[id][stage][idx].image} alt=""  />
                <CardBody style={{backgroundColor:"#C4CDD5"}}>
                    <CardText>
                        {data[id][stage][idx].description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}