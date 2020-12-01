import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { result } from '../../data/result';
import Header from './Header';
/* import Footer from "./Footer"; */
import Main from './Main';
import Banner from './Banner';
import SensibleBanner from './SensibleBanner';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: result,
            sensibleSkinScore: this.props.location.state.sensibleSkinScore,
            skinScore: this.props.location.state.skinScore
        }
    }
    
    changeSensibleScore = (event) => {
        // console.log(event);
        this.setState({sensibleSkinScore : 0});
        window.scrollTo(0, 0);
    }

    render() {
        /* console.log(this.state.data); */
        return(
            <React.Fragment>
                <Header 
                    sensibleSkinScore={this.state.sensibleSkinScore}
                    skinScore={this.state.skinScore}
                    data={this.state.data}
                />
                <SensibleBanner
                    sensibleSkinScore={this.state.sensibleSkinScore}
                    changeSensibleScore={this.changeSensibleScore}
                />
                <Main
                    sensibleSkinScore={this.state.sensibleSkinScore}
                    skinScore={this.state.skinScore}
                    data={this.state.data}
                    changeSensibleScore={this.changeSensibleScore}
                />
                <Banner 
                    sensibleSkinScore={this.state.sensibleSkinScore}
                    changeSensibleScore={this.changeSensibleScore}
                />
                {/* <Footer/> */}
            </React.Fragment>
        )
    }
}

export default withRouter(Result);