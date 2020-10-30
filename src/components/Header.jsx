import React, {Component} from 'react'
import header from '../img/header.png';

export default class Header extends Component{
    render() {
        return (
            <header>
                <img className="header" src={header} alt="Imagen"></img>
            </header>
        )
    }
};