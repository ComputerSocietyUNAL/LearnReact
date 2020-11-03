import React, {Component} from 'react';
import G from '../img/Grasa.png';
import T from '../img/ZonaT.png';
import N from '../img/Normal.png';

export default class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
        }
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    checkAnswer(e, idx) {
        
        let { isAnswered, skinType, sensibleSkin} = this.props;
        
        if(!isAnswered) {
            let { increaseSkinScore, increaseSensibleSkinScore } = this.props;
            increaseSkinScore(skinType[idx]);
            increaseSensibleSkinScore(sensibleSkin[idx]);
            this.props.showButton();
        }
    }

    configIcon(config){
        return config === 'G' ? G : config === 'T' ? T : N
    }

    style(config){
        return {
            backgroundColor: config[0]
        }
    }
        
    render() {
        let { answers, configIcon, configStyle} = this.props;

        return (
            <div id="answers">
                <ul>
                    <li onClick={e => this.checkAnswer(e,0)} data-id="1">
                        <img src={this.configIcon(configIcon[0])} alt="Imagen" style={this.style(configStyle)}></img>
                        <p>{answers[0]}</p>
                    </li>
                    <li onClick={e => this.checkAnswer(e,1)} data-id="2">
                        <img src={this.configIcon(configIcon[1])} alt="Imagen" style={this.style(configStyle)}></img>
                        <p>{answers[1]}</p>
                    </li>
                    <li onClick={e => this.checkAnswer(e,2)} data-id="3">
                        <img src={this.configIcon(configIcon[2])} alt="Imagen" style={this.style(configStyle)}></img>
                        <p>{answers[2]}</p>
                    </li>
                    <li onClick={e => this.checkAnswer(e,3)} data-id="4">
                        <img src={this.configIcon(configIcon[3])} alt="Imagen" style={this.style(configStyle)}></img>
                        <p>{answers[3]}</p>
                    </li>
                </ul>
            </div>
        );
    }
};