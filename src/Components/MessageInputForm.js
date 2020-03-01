// a couple of functions from the React library
import React, { Component } from "react";

class MessageInputForm extends Component {
    constructor(){
        super();
        this.state={
            userInput:""
        }
    }

    handleChange = e => {
        // console.log('Things are changing', e.target.value);
        this.setState({
        userInput: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault(); 
        this.props.handleFormSubmit(this.state.userInput);
        // return input to empty.
        // eslint-disable-next-line
        this.state.userInput=""
    };


    render() {
        return (

        <div className="messageInput">
            <form action="submit" onSubmit={this.handleSubmit}>
            <label 
                className="visually-hidden" 
                htmlFor="messageForm">Please type your message!</label>
            <input 
                className="inputField"
                type="text" 
                id="messageForm" 
                onChange={this.handleChange}
                value={this.state.userInput} // good for accessibility and screen readers, this will track the changes even if they leave and come back
            />
            <button 
                className="submitButton"
                type="submit" 
            > 
            <i className="fas fa-paper-plane"></i> 
            </button>
            </form>
        </div>
        );
    }
}

export default MessageInputForm;
