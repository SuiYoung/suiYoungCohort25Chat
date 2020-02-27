// a couple of functions from the React library
import React, { Component } from 'react';

class Aside extends Component{
render(){
    return (
        <section>
            {/* instructions panel */}
            <div className="instructions">
                <i class="fas fa-question-circle"></i>
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
            </div>


        </section>
    );
}
}

export default Aside;