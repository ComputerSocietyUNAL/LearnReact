import React, {Component} from 'react';
import footer from '../img/footer.png';

export default class Footer extends Component{
    render() {
        return (
            <footer>
                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                <img className="footer" src={footer} alt="Imagen" height={80}></img>
            </footer>
        )
    }
};