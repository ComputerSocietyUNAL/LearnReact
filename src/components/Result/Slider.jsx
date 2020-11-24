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
                slidesToSlide: 3, // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3,
                slidesToSlide: 3, // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              }
        };
        const { stage, id } = this.props;
        const data = this.props.data;
        let idx = -1;

        return(
            <div className="container" style={{width:"56vw",height:"100%"}}>
                <Carousel
                    arrows={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    draggable={false}
                    customTransition="all .4"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    /* removeArrowOnDeviceType={[ "mobile"]} */
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding"
                    centerMode={false}
                    renderDotsOutside={true}
                >
                    { 
                        data[id][stage].map(() => {
                            idx=idx+1
                            return (
                                <div>
                                    <Product data={this.props.data} id={id} idx={idx} stage={stage}/>
                                </div>
                            );
                        })
                    }
                </Carousel>
            </div>
        );
    }
}