// a couple of functions from the React library
import React, { Component } from 'react';
import MessageInputForm from './MessageInputForm';


class Main extends Component{
render(){
    return (
        <div className="chat">
            <div className="chatDisplay"></div>
            {/* <MessageInputForm /> */}
        </div>
    );
}
}

export default Main;