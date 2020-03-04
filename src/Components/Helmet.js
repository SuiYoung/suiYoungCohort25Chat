// a couple of functions from the React library
import React from 'react';
import { Helmet } from "react-helmet";

class Application extends React.Component {
    render () {
        return (
            <div className="application">
                <Helmet>
                    <title>Cohort 25 Chat</title>
                    {/* insert fontawesome kit */}
                    <script src="https://kit.fontawesome.com/dfdc9c622d.js" crossorigin="anonymous"></script>

                    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
                    
                </Helmet>
                ...
            </div>
        );
    }
};

export default Application;