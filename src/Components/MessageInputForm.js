// a couple of functions from the React library
import React, { Component } from "react";

class MessageInputForm extends Component {
    render(props) {
        return (
        <div className="messageInput">
            <form action="submit" onSubmit={props.handleFormSubmit}>
            <label htmlFor="messageForm">Please Add A Toy To the ToyBox!</label>
            <input 
                type="text" 
                id="messageForm" 
                onChange={props.handleChange}
                value={props.state.userInput} // good for accessibility and screen readers, this will track the changes even if they leave and come back
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
