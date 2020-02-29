// a couple of functions from the React library
import React, { Component } from "react";

// import firebase
import firebase from './../firebase';

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
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.userInput);
        this.setState({
        userInput: ""
        });
    };


    render() {
        return (

        <div className="messageInput">
            <form action="submit" onSubmit={this.handleSubmit}>
            <label htmlFor="messageForm">Please Add A Toy To the ToyBox!</label>
            <input 
                type="text" 
                id="messageForm" 
                onChange={this.handleChange}
                value={this.state.userInput} // good for accessibility and screen readers, this will track the changes even if they leave and come back
            />
            <button 
                type="submit" 
            > send </button>
            </form>
        </div>
        );
    }
}

export default MessageInputForm;
