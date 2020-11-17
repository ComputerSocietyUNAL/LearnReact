import React, {Component} from 'react'
import header from '../img/header.webp';

export default class Header extends Component{
    render() {
        return (
            <header>
                <img className="header" src={header} alt="Imagen" height={80}></img>
            </header>
        )
    }
};