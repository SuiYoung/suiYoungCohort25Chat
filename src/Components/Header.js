// a couple of functions from the React library
import React from 'react';

const Header = ()=>{

    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <div>
            <h1>Cohort 25 Chat <i className="fas fa-comment-dots"></i></h1>
            <button onClick={refreshPage}>New User <i className="fas fa-grin-stars"></i></button>
        </div>
    )
}



export default Header;