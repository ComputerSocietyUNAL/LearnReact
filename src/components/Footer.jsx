import React, {Component} from 'react';
import footer from '../img/footer.png';

export default class Footer extends Component{
    render() {
        return (
            <footer>
                <img className="footer" src={footer} alt="Imagen"></img>
            </footer>
        )
    }
};