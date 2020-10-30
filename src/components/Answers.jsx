import React, {Component} from 'react';
import img1 from '../img/primera.png';
import img2 from '../img/segunda.png';
import img3 from '../img/tercera.png';
import img4 from '../img/cuarta.png';

export default class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
        }
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        if(!isAnswered) {
            let { increaseScore } = this.props;
            increaseScore();
            this.props.showButton();
        }
    }
        
    render() {
        let { answers } = this.props;
        
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} data-id="1"><img className="Image" src={img1} alt="Imagen"></img><p>{answers[0]}</p></li>
                    <li onClick={this.checkAnswer} data-id="2"><img className="Image" src={img2} alt="Imagen"></img><p>{answers[1]}</p></li>
                    <li onClick={this.checkAnswer} data-id="3"><img className="Image" src={img3} alt="Imagen"></img><p>{answers[2]}</p></li>
                    <li onClick={this.checkAnswer} data-id="4"><img className="Image" src={img4} alt="Imagen"></img><p>{answers[3]}</p></li>
                </ul>
            </div>
        );
    }
};