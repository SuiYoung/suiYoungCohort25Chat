// a couple of functions from the React library
import React from 'react';

const Aside = props => {

    let instructions = 'sideDrawer';

    if (props.show) {
        instructions = "sideDrawer open";
    }
        return (
            <section>
                {/* instructions panel */}
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
    
    
            </section>
        );
    }



export default Aside;