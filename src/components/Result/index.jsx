import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { result } from '../../data/result';
import Header from './Header';
import Footer from "./Footer";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.setState({
            data: result
        });
    }

    render() {
        return(
            <React.Fragment>
                <Header/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default withRouter(Result);
