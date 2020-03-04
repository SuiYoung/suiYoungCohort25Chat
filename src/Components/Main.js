// a couple of functions from the React library
import React from 'react';
import MessageInputForm from './MessageInputForm';


const Main = () => (
    <div className="mainGrid">
        <div className="chatDisplay" id="chatDisplay"></div>
        <MessageInputForm />
    </div>
);


export default Main;