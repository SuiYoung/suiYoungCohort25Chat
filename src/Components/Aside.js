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
                <ul>
                    <li>instructions here</li>
                    <li>instructions here</li>
                    <li>instructions here</li>
                    <li>instructions here</li>
                    <li>instructions here</li>
                </ul>
            </div>
        </aside>
    );
}



export default Aside;