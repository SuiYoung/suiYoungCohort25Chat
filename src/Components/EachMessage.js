// a couple of functions from the React library
import React from "react";

// import firebase
import firebase from "./../firebase";

const EachMessage = ({msgProp}) => {
    // 🧠 function to remove messages
    let remove = key => {
        const dbRef = firebase.database().ref();
        dbRef.child(msgProp.key).remove();
    };

    let colorChoice = msgProp.message.userColor;

        return (
            <div className={colorChoice} key={msgProp.key}>
                {/* Github Avatar for each user */}
                <img src={msgProp.message.userImg} alt={msgProp.message.userName} />
                {/* button to delete messages */}
                <button
                className="trash"
                onClick={() => {
                    remove(msgProp.message.key);
                }}
                >
                <i className="fas fa-trash-alt"></i>
                </button>{" "}
                {/* user name and message */}
                <p>
                <span className="blueFont">{msgProp.message.userName} {" "}:{" "}</span>
                {msgProp.message.userInput}
                </p>
            </div>
        );

};

export default EachMessage;
