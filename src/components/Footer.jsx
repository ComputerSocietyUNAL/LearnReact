import React, {Component} from 'react';
import footer from '../img/footer.webp';

export default class Footer extends Component{
    render() {
        return (
            <footer>
                <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/cetaphilcolombia"><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/CetaphilCol"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/user/GaldermaColombia"><i className="fa fa-youtube"></i></a>
                <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/cetaphilcol/"><i className="fa fa-instagram"></i></a>
                <img className="footer" src={footer} alt="Imagen" height={80}></img>
            </footer>
        )
    }
};