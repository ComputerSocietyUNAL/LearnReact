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
        this.configIcon = this.configIcon.bind(this);
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
        
    render() {
        let { answers, configIcon } = this.props;
        let img1 = this.configIcon(configIcon[0]);
        let img2 = this.configIcon(configIcon[1]);
        let img3 = this.configIcon(configIcon[2]);
        let img4 = this.configIcon(configIcon[3]);

        return (
            <div id="answers">
                <ul>
                    <li onClick={e => this.checkAnswer(e,0)} data-id="1"><img className="Image" src={img1} alt="Imagen"></img><p>{answers[0]}</p></li>
                    <li onClick={e => this.checkAnswer(e,1)} data-id="2"><img className="Image" src={img2} alt="Imagen"></img><p>{answers[1]}</p></li>
                    <li onClick={e => this.checkAnswer(e,2)} data-id="3"><img className="Image" src={img3} alt="Imagen"></img><p>{answers[2]}</p></li>
                    <li onClick={e => this.checkAnswer(e,3)} data-id="4"><img className="Image" src={img4} alt="Imagen"></img><p>{answers[3]}</p></li>
                </ul>
            </div>
        );
    }
};