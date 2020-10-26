import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Que tipo de piel tienes',
            text: 'Test para saber que tipo de piel tienes' ,
            buttonText: 'Start the quiz' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle(event) {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });
            
            this.props.startQuiz();
        } else {            
            window.location.reload();// restart the application
        }

        console.log(event.target.value)
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + '</strong> out of <strong>' +this.props.total +'</strong> questions right.'
        })
    }
    
    createMarkup(text) {
        return {__html: text};
    }
    
    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{title}</h1>
                            <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                            <button className="fancy-btn" onClick={e => this.popupHandle(e)}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup
