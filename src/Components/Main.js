// a couple of functions from the React library
import React, { Component } from 'react';

class Main extends Component{
render(){
    return (
        <div className="chatDisplay">
            <MessageDisplay />
            <MessageInputForm />
        </div>
    );
}
}

export default Main;