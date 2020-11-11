import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { result } from '../../data/result';
import Header from './Header';
import Footer from "./Footer";
import Main from './Main';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: result
        }
    }
    
    render() {
        /* console.log(this.state.data); */
        return(
            <React.Fragment>
                <Header 
                    state={this.props.location.state} 
                    data={this.state.data}
                />
                <Main/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withRouter(Result);