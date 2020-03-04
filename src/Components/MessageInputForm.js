// a couple of functions from the React library
import React from "react";

const MessageInputForm=(props)=> (
        <div className="messageInput">
            <form action="submit" onSubmit={(e)=> props.handleFormSubmit(e)}>
            <label 
                className="visually-hidden" 
                htmlFor="messageForm">Please type your message!</label>
            <input 
                className="inputField"
                type="text" 
                id="messageForm" 
                onChange={props.handleChange}
                value={props.userInputProp} // good for accessibility and screen readers, this will track the changes even if they leave and come back
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


export default MessageInputForm;
