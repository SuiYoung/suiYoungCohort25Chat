// a couple of functions from the React library
import React, { Component } from "react";

class MessageInputForm extends Component {
    render(props) {
        console.log(this.props);
        return (

        <div className="messageInput">
            <form action="submit" onSubmit={this.props.formSubmit}>
            <label htmlFor="messageForm">Please Add A Toy To the ToyBox!</label>
            <input 
                type="text" 
                id="messageForm" 
                onChange={this.props.handleChange}
                value={this.props.state.userInput} // good for accessibility and screen readers, this will track the changes even if they leave and come back
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
