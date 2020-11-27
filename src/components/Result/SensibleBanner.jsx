import React , { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class SensibleBanner extends Component {
    render(){
        return(
            <div>
                {this.props.sensibleSkinScore > 1 ?
                <div className="Banner-text">
                    <Link 
                        className="btn btn-light animate__animated animate__pulse animate__infinite " /* to="/test"  */
                        onClick={e => this.props.changeSensibleScore(e)}
                        style={{
                            margin:'15px', 
                            width:'auto', 
                            backgroundColor:"#62788D",
                            color:"white"}}>Conoce tu tipo de piel y su cuidado especializado</Link>
                </div>
                :
                <div></div>
                }
            </div>
        )
    }
}
{/* <Button color="secondary" className="animate__animated animate__pulse animate__infinite Banner-button" onClick={e => this.props.changeSensibleScore(e)}>Ver más</Button> */}