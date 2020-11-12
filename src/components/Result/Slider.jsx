import React,  { Component } from 'react';
import Carousel from "react-multi-carousel";
import Product from './Product';



import "react-multi-carousel/lib/styles.css";

export default class SimpleSlider extends Component {
    render(){
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
              }
        };
        
        var products;
        var idx = -1; // falta definir como pasar este valor :v
        var id= 0; //toca mirar segun logica si es igual a idx
        var stage='clean';
        var dato;
        const data = this.props.data;
        if (stage==='clean'){
            dato=data[id].clean
        }
        if(stage==='hydration'){
            dato=data[id].hydration
        }
        if(stage==='solarProtection'){
            dato=data[id].solarProtection
        }
        var numbers= dato;
        return(
            <div className="container">
                <Carousel
                    arrows={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    customTransition="all .4"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={[ "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    centerMode={false}
                    renderDotsOutside={false}
                    >
                    {products= numbers.map(() => {
                        idx=idx+1
                        return (
                            <div>
                                <Product data={this.props.data} id={id} idx={idx} stage={stage}/>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        );
    }
}