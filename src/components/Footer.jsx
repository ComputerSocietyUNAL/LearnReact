import React, {Component} from 'react';
import footer from '../img/footer.png';

export default class Footer extends Component{
    render() {
        return (
            <footer>
                <a 
                    className="btn btn-default" 
                    type="button" 
                    href="https://www.facebook.com/cetaphilcolombia"
                    style={{width:"32px",height:"32px",padding:"0px",borderWidth:"0px"}}
                >
                    <img src="/assets/redes/Facebook-Azul.png" alt="" style={{width:"32px"}}/>
                </a>
                <a 
                    className="btn btn-default" 
                    type="button" 
                    href="https://twitter.com/CetaphilCol"
                    style={{width:"32px",height:"32px",padding:"0px",borderWidth:"0px"}}
                >
                    <img src="/assets/redes/Twitter-Azul.png" alt="" style={{width:"32px"}}/>
                </a>
                <a 
                    className="btn btn-default" 
                    type="button"
                    href="https://www.youtube.com/user/GaldermaColombia" 
                    style={{width:"32px",height:"32px",padding:"0px",borderWidth:"0px"}}
                >
                    <img src="/assets/redes/Youtube-Azul.png" alt="" style={{width:"32px"}}/>
                </a>
                <a 
                    className="btn btn-default" 
                    type="button"
                    href="https://www.instagram.com/cetaphilcol/" 
                    style={{width:"32px",height:"32px",padding:"0px",borderWidth:"0px"}}
                >
                    <img src="/assets/redes/Instagram-Azul.png" alt="" style={{width:"32px"}}/>
                </a>
                <img className="footer" src={footer} alt="Imagen" height={80}></img>
            </footer>
        )
    }
};