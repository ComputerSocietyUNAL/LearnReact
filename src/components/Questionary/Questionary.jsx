import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { Fade, Stagger } from 'react-animation-components';
import { AnimateOnChange } from 'react-animation';
import { data } from '../../data/data';
import Answers from './Answers';
import Footer from '../Footer';
import Header from '../Header';

class Questionary extends Component {
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
            configStyle: ['#D7CDC4' ,'#8F8070'],
            back:'#FFF3F1'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleIncreaseSkinScore = this.handleIncreaseSkinScore.bind(this);
        this.handleIncreaseSensibleSkinScore = this.handleIncreaseSensibleSkinScore.bind(this);
    }

    pushData(current) {
        this.setState({
            question: data[current].question,
            back: data[current].back,
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
        let { current, total, skinScore, sensibleSkinScore } = this.state;

        if(current === total){
            const { history } = this.props;
    
            history.push({
                pathname: "/result",
                state: {
                    skinScore,
                    sensibleSkinScore
                }
            })

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
            question, 
            answers, 
            questionAnswered, 
            skinType, 
            sensibleSkin,
            configStyle,
            configIcon,
            back
        } = this.state;
        let btndots=0;
    switch(current){
        case 1:
            btndots="/assets/dots/Pregunta.svg";
            break;
        case 2:
            btndots="/assets/dots/Pregunta2.svg";
            break;
        case 3:
            btndots="/assets/dots/Pregunta3.svg";
            break;
        case 4:
            btndots="/assets/dots/Pregunta4.svg";
            break;
        case 5:
            btndots="/assets/dots/Pregunta5.svg";
            break;
        case 6:
            btndots="/assets/dots/Pregunta6.svg";
            break;
        case 7:
            btndots="/assets/dots/Pregunta7.svg";
            break;
        case 8:
            btndots="/assets/dots/Pregunta8.svg";
            break;
        case 9:
            btndots="/assets/dots/Pregunta9.svg";
            break;
        case 10:
            btndots="/assets/dots/Pregunta10.svg";
            break;
        case 11:
            btndots="/assets/dots/Pregunta11.svg";
            break;
        case 12:
            btndots="/assets/dots/Pregunta12.svg";
            break;
        default:
            break;
    }
        return (
            <TransitionGroup style={{height:"auto"}}>
                <div className="container" style={{backgroundColor: back,height:"100%"}}>
                    <Header/>
                    <Stagger in className="questionBox">
                        <Fade in>
                            <div id="question" className="row">
                                <div className="col-md-6 contenido2" style={this.style(configStyle)}>
                                    <AnimateOnChange durationOut="500" >
                                        <p className="pregunta" >{question}</p>
                                    </AnimateOnChange>
                                    <img className="dots" src={btndots} alt="dots" />
                                </div>
                                <div className="col-md-6 contenido2" >
                                    <AnimateOnChange durationOut="500" >
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
                                    </AnimateOnChange>
                                </div>
                            </div>
                        </Fade>
                    </Stagger>
                    <Footer/>
                </div>
            </TransitionGroup>
        );
    }
}

export default withRouter(Questionary);