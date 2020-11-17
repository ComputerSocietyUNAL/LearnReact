import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render(){
        return(
            <div className="Banner" >
                <div className="row" style={{margin:"0px"}}>
                    <div className="col-4" style={{padding:"0px"}}>
                        <img src="/assets/BannerIZQ.webp" className="Banner-img" alt=""/>
                    </div>
                    {   this.props.sensibleSkinScore > 1 ?
                        <div className="col-4 Banner-text">
                            <p>Conoce tu tipo de piel y su cuidado especializado</p>
                            <Button color="secondary" onClick={e => this.props.changeSensibleScore(e)}>Ver más</Button>
                        </div>
                        :
                        <div className="col-4 Banner-text">
                            <p>Conoce tu tipo de piel y su cuidado especializado</p>
                            <Link 
                            className="btn btn-light" to="/test" 
                            style={{
                                margin:'auto', 
                                width:'50%', 
                                backgroundColor:"#62788D",
                                color:"white"}}>Rehacer Test</Link>
                        </div>
                    }
                    <div className="col-4" style={{padding:"0px"}}>
                        <img src="/assets/BannerDER.webp" className="Banner-img" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}