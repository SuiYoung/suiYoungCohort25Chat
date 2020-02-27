// a couple of functions from the React library
import React from 'react';
import { Helmet } from "react-helmet";

class Application extends React.Component {
    render () {
        return (
            <div className="application">
                <Helmet>
                    <title>Cohort 25 Chat</title>
                </Helmet>
                ...
            </div>
        );
    }
};

export default Application;