import React,  { Component } from 'react';
import Product from './Product';

export default class NoSlider extends Component {
    render(){
        const { stage, id } = this.props;
        const data = this.props.data;
        let idx = -1;
        return(
            <div className="container" style={{width:"70vw",marginLeft:"13.5vw"}}/*56vw*/>
                { 
                    data[id][stage].map(() => {
                        idx=idx+1
                        return (
                            <div style={{marginBottom:"10px"}}>
                                <Product data={this.props.data} id={id} idx={idx} stage={stage}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}