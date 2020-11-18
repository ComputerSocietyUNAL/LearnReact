import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render(){
        return(
            <div className="Banner" >
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 box lg" >
                            <img src="/assets/BannerIZQ.png" className="Banner-img" alt=""/>
                        </div>
                        <div className="col-md-4">
                        {   this.props.sensibleSkinScore > 1 ?
                            <div className="Banner-text">
                                <p>Conoce tu tipo de piel y su cuidado especializado</p>
                                <Button color="secondary" className="animate__animated animate__pulse animate__infinite Banner-button" onClick={e => this.props.changeSensibleScore(e)}>Ver más</Button>
                            </div>
                            :
                            <div className="Banner-text">
                                <p>Conoce tu tipo de piel y su cuidado especializado</p>
                                <Link 
                                className="btn btn-light animate__animated animate__pulse animate__infinite " to="/test" 
                                style={{
                                    margin:'15px', 
                                    width:'auto', 
                                    backgroundColor:"#62788D",
                                    color:"white"}}>Rehacer Test</Link>
                            </div>
                        }
                        </div>
                        <div className="col-md-4 box lg" >
                            <img src="/assets/BannerDER.png" className="Banner-img" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}