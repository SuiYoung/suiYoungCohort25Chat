// a couple of functions from the React library
import React, { Component } from "react";
import { Howl, Howler } from "howler";

// // import audio clip
// import click from './../audioClips/soundsofawesome_click.wav';

// const audioClips = {
//         sound: click, 
//         label: 'clickSound'};

class MessageInputForm extends Component {
    constructor(){
        super();
        this.state={
            userInput:""
        }
    };

    // soundPlay = (src) => {
    //     const sound = new Howl({
    //         src: ['soundsofawesome_click.wav']
    //     });
    //     sound.play();
    // }
        
    // renderButtonAndSound = () => {
    //     return audioClips => {
    //         return (
    //             <button 
    //                 className="submitButton" 
    //                 onClick={()=> this.soundPlay(sound)}>
    //                 <i className="fas fa-paper-plane"></i>
    //             </button>
    //         )
    //     }
    // }



    handleChange = e => {
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
        // Howler.volume(1.0)
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

            {/* {this.renderButtonAndSound()} */}
            
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
