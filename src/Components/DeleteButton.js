// a couple of functions from the React library
import React from 'react';
// import Aside from './Aside';

const DeleteButton = props => {
    return (
        <div className="trashContainer">
            <button 
            onClick={props.click} 
            className="trash">
            <i className="fas fa-trash-alt"></i>
            </button>
            <h3>← Click Me To Start!</h3>
        </div>
    );
}




export default DeleteButton;