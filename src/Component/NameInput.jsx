import React from 'react';

class NameInput extends React.Component{

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onValidityChange(this.isValid(event.target.value));
        this.props.onTextChange(event.target.value);
    }


    render(){
        return (
            <div>
            <label>
                    Name:
                    <input 
                    className= 
                        {
                            this.props.hasSubmitted && !this.props.isValid 
                                ? 
                            ('invalidName') : ('')
                        }
                    type="text" 
                    value={this.props.text} 
                    onChange={this.handleChange} />
                
                </label><br />
                </div>
            )
   } 

   isValid(val = this.props.text){
    if(val.length > 3){
        return true;
    }  
    return false;
}   
}

export default NameInput;