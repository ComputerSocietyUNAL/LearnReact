import React, { Component } from 'react';
import { data } from '../data/data';

export default class Questionary extends Component{
   constructor(props) {
       super(props);
       this.state = {
           data: data
       }
   }
    render() {
        return (
            <div>
                <div className="col-12" id="question">
                    <p> {data[0].question}</p>
                </div>
                <div className="row">
                    <div className="col-6" id="answers">
                        <span id="answers">
                           <p> {data[0].answers[0] } </p>
                        </span>
                    </div>
                    <div className="col-6" id="answers">
                    <span id="answers">
                           <p> {data[0].answers[1] } </p>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6" id="answers">
                    <span id="answers">
                           <p> {data[0].answers[2] } </p>
                        </span>
                    </div>
                    <div className="col-6" id="answers">
                    <span id="answers">
                           <p> {data[0].answers[3] } </p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};