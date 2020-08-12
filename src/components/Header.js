import React, { Component } from 'react';

class Header extends Component{
    state = {};
    render() {
        return(
            <div className="header">
                <h1 className="next">Task-Assist</h1>
                <h4 className="next">Help</h4>
                <h4 className="next">Settings</h4>
                <h4 className="next">User</h4>
            </div>
        )
    }
}

export default Header;