import React, { Component } from 'react';
import { data } from '../data/data';
import Answers from './Answers';
import Footer from './Footer';
import Header from './Header';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            skinType:[0,0,0,0],
            sensibleSkin:[0,0,0,0],
            skinScore: 0,
            sensibleSkinScore: 0,
            configStyle: ['#D7CDC4' ,'#8F8070']
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleIncreaseSkinScore = this.handleIncreaseSkinScore.bind(this);
        this.handleIncreaseSensibleSkinScore = this.handleIncreaseSensibleSkinScore.bind(this);
    }

    pushData(current) {
        this.setState({
            question: data[current].question,
            answers: [data[current].answers[0], data[current].answers[1], data[current].answers[2], data[current].answers[3] ],
            skinType: data[current].skinType,
            sensibleSkin: data[current].sensibleSkin,
            configStyle: data[current].configStyle,
            configIcon: data[current].configIcon,
            current: this.state.current + 1
        });
    }

    componentWillMount() {
        let { current } = this.state;
        this.pushData(current);
    }

    nextQuestion() {
        let { current, total } = this.state;

        if(current === total){
            console.log("Redirigir a Sientete segura");
        } else {
            this.pushData(current);
            this.setState({
                showButton: false,
                questionAnswered: false,
            });
        }

    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    handleIncreaseSkinScore(score) {
        this.setState({
            skinScore: this.state.skinScore + score
        });
    }

    handleIncreaseSensibleSkinScore(score) {
        this.setState({
            sensibleSkinScore: this.state.sensibleSkinScore + score
        });
    }
    
    style(config){
        return {
            backgroundColor: config[0],
            color: config[1]
        }
    }

    render() {
        let { 
            current, 
            total, 
            question, 
            answers, 
            questionAnswered, 
            skinType, 
            sensibleSkin,
            configStyle,
            configIcon
        } = this.state;

        return (
            <div className="container">
                <div id="question" className="row" style={this.style(configStyle)}>
                    <div  className="col-6 contenido">
                        <p className="pregunta" >{question}</p>
                        <h4>{current}/{total}</h4>
                    </div>
                    <div className="col-6">
                        <Header/>
                        <Answers 
                            answers={answers}
                            showButton={this.nextQuestion} 
                            isAnswered={questionAnswered}
                            skinType={skinType}
                            sensibleSkin={sensibleSkin}
                            configStyle={configStyle}
                            configIcon={configIcon}
                            increaseSkinScore={this.handleIncreaseSkinScore}
                            increaseSensibleSkinScore={this.handleIncreaseSensibleSkinScore}
                            />
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
};