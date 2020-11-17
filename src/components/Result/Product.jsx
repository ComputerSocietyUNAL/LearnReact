import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

export default class Product extends Component {
    indiceStyles(produc){
        if(produc==='clean'){
            return 0
        }else if(produc==='hydration'){
            return 1
        }else if (produc==='solarProtection'){
            return 2
        }else{
            console.log("esto no deberia haber pasado :v")
            return 0
        }
    }
    render(){
        const { id, idx, stage, data } = this.props;
        const indice = this.indiceStyles(stage);
        return(
            <Card className="CardStyle" style={{backgroundColor:data[id].color[indice].colorFondo}}  >
                <div className="trapezoid" style={{
                    borderTopColor:data[id].color[indice].colorLetra,
                    borderLeftColor:data[id].color[indice].colorLetra
                    }}>
                    <p style={{margin:"6%",marginLeft:"-20%",fontSize:"14px",color:"white",fontFamily:"Poppins-Regular"}}>
                    {data[id][stage][idx].type}
                    </p>
                </div>
                <CardImg src={data[id][stage][idx].image} alt=""  />
                <CardBody style={{backgroundColor:data[id].color[indice].colorDesc}}>
                    <CardText style={{fontFamily:"Poppins-ExtraLight",color:data[id].color[indice].colorLetra}}>
                        {data[id][stage][idx].description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}