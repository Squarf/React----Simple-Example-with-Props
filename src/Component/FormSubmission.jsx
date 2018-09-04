import React from 'react';
import NameInput from './NameInput';



class FormSubmission extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasSubmitted: false,
            isValid: false,
            text: ''
    };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidity = this.handleValidity.bind(this);
        this.handleText = this.handleText.bind(this);
    }
    
    handleSubmit(event){
        this.setState({hasSubmitted : true});
        event.preventDefault();
    }

    handleValidity(validityStatus){
        this.setState({isValid : validityStatus});
    }

    handleText(newText){
        this.setState({text: newText});
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="NameInput">
                </div>
                <NameInput 
                    hasSubmitted={this.state.hasSubmitted}
                    isValid = {this.state.isValid}
                    onTextChange={this.handleText}
                    onValidityChange={this.handleValidity}
                />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default FormSubmission;