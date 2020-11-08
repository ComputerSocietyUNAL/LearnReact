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

        console.log(total)

        return (
            <div>
                <Header/>
                <div id="question" className="row" >
                    <div  className="col-md-6  contenido2" style={this.style(configStyle)}>
                        <p className="pregunta" >{question}</p>
                        <div className="progressbar">
                            <span className="dot" style={current > 0 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 1 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 2 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 3 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 4 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 5 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 6 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 7 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 8 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 9 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 10 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 11 ? this.style(configStyle) : {}} />
                            <span className="dot" style={current > 12 ? this.style(configStyle) : {}} />
                        </div>

                    </div>
                    <div className="col-md-6">
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
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
};