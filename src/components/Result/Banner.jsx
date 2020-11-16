import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Banner extends Component {
    sensibleSkinScore=this.props.sensibleSkinScore;
    render(){

        if (this.sensibleSkinScore>0){
            return(
                <div className="Banner" >
                    <div className="row">
                        <div className="col-4">
                            <img src="/assets/BannerIZQ.png" className="Banner-img" alt=""/>
                        </div>
                        <div className="col-4 Banner-text">
                            <p>Conoce tu tipo de piel y su cuidado especializado</p>
                            <Button color="secondary">Ver más</Button>
                        </div>
                        <div className="col-4">
                            <img src="/assets/BannerDER.png" className="Banner-img" alt=""/>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
}