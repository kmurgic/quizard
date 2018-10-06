import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = props => {
    return (
        <div>
            <p
            className = "right-link"
            onClick={props.openMenu}>
            {props.username} <i className="fas fa-caret-down"></i>
            </p> 
            <div className={props.showMenu ? "dropdown" : "dropdown hidden"}>
                <Link 
                className="right-link" 
                to={process.env.PUBLIC_URL + '/myquizzes'} >
                    My Quizzes
                </Link>
                <div
                className="right-link"
                onClick={props.logout}>
                    Logout
                </div>
            </div>      
        </div>
    )
}

export default Dropdown;