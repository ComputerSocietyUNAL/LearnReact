import React, { Component } from 'react';
import { data } from '../data/data';
import Answers from './Answers';
import Footer from './Footer';
import Header from './Header';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    pushData(nr) {
        this.setState({
            question: data[nr].question,
            answers: [data[nr].answers[0], data[nr].answers[1], data[nr].answers[2], data[nr].answers[3] ],
            nr: this.state.nr + 1
        });
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    nextQuestion() {
        let { nr, total } = this.state;

        if(nr === total){
            this.setState({
                displayPopup: 'flex'
            });
        } else {
            this.pushData(nr);
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

    handleIncreaseScore() {
            this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { nr, total, question, answers, questionAnswered} = this.state;

        return (
            <div className="container">
                <div id="question" className="row">
                    <div  className="col-6 contenido">
                        <p className="pregunta" >{question}</p>
                        <h4>{nr}/{total}</h4>
                    </div>
                    <div className="col-6">
                        <Header/>
                        <Answers 
                            answers={answers}
                            showButton={this.nextQuestion} 
                            isAnswered={questionAnswered} 
                            increaseScore={this.handleIncreaseScore}/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
};