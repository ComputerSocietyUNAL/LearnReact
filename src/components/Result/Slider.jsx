import React,  { Component } from 'react';
import Carousel from "react-multi-carousel";
import Product from './Product';

import Producto1 from '../../img/Producto1.png'
import Producto2 from '../../img/Producto2.png'
import Producto3 from '../../img/Producto3.png'
import Producto4 from '../../img/Producto4.png'
import Producto5 from '../../img/Producto5.png'
import Producto6 from '../../img/Producto6.png'

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
        return(
            <div className="container">
                <Carousel
                    arrows={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
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
                    <div style={{border:"solid 1px",borderColor:"black"}}>
                        <Product/>
                    </div>
                    <div>
                        <img src={Producto2} alt=""/>
                    </div>
                    <div>
                        <img src={Producto3} alt=""/>
                    </div>
                    <div>
                        <img src={Producto4} alt="" />
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <img src={Producto5} alt=""/>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <img src={Producto6} alt=""/>
                    </div>
                </Carousel>
            </div>
        );
    }
}