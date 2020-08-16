import React, { Component } from 'react';

class Header extends Component{
    state = {};
    render() {
        return(
            <div className="header">
                <h1 className="title">Task-Assist</h1>
                <nav className="navbar">
                    <a href="http://google.com">Help</a>
                    <a href="http://google.com">Settings</a>
                    <a href="http://google.com">User</a>
                </nav>
            </div>
        )
    }
}

export default Header;