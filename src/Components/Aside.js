// a couple of functions from the React library
import React from 'react';

const Aside = props => {

    // give new class to aside via variable
    let instructions = 'sideDrawer';

    // if the state for asideOpen changes to true, then add on second class of open
    if (props.show) {
        instructions = "sideDrawer open";
    }

    return (
        <aside className={instructions}>
            <div className="instrContainer">
                <h2>How To Use:</h2>
                <ol>
                    <li>[tab]-to or click into the input field and type your message.</li>
                    <li>Press [enter] or [tab] to the send button (the paper airplane)</li>
                    <li>Your message will appear above!</li>
                    <li>To clear your last message!</li>
                    <li>instructions here</li>
                </ol>
            </div>
        </aside>
    );
}



export default Aside;