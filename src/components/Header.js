import React, { Component } from 'react';

class Header extends Component{
    state = {};
    render() {
        return(
            <div className="header">
                <h1 className="title">Task-Assistant</h1>
                <nav className="navbar">
                    {/* <a href="">Help</a>
                    <a href="">Settings</a>
                    <a href="">User</a> */}
                </nav>
            </div>
        )
    }
}

export default Header;