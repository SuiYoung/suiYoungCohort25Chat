// a couple of functions from the React library
import React from "react";
// import Aside from './Aside';

const EachMessage = ({msgProp}) => {
    console.log(msgProp);
        // console.log(props.key)
        return (
            <div className="default" key={msgProp.key}>
                {/* Github Avatar for each user */}
                <img
                    src={msgProp.message.userImg}
                    alt={msgProp.message.userName}
                />
                  {/* button to delete messages */}
                <button
                    className="trash"
                    onClick={() => {
                    this.remove(msgProp.message.key);
                    }}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>{" "}
                  {/* user name and message */}
                <p>
                    <span className="blueFont">{msgProp.message.userName}</span>
                    : {msgProp.message.userInput}
                </p>
                </div>
        );

};

export default EachMessage;
