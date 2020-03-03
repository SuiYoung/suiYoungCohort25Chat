// a couple of functions from the React library
import React from 'react';
// import Aside from './Aside';

const instructionButton = props => {
    return (
        <div className="asideButtonContainer">
            <button onClick={props.click} className="instrIcon">
            <i className="fas fa-question-circle"></i>
            </button>
            <h3>← Click Me To Start!</h3>
        </div>
    );
}




export default instructionButton;