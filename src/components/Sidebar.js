import React, { Component } from 'react';
import CreateEvent from './CreateEvent'

class Sidebar extends Component{
     render() {
        return(
            <div className="side-bar">
                <div className="sidebar-title">
                    <h3>Events</h3>
                    <CreateEvent className="create-button"/>
                </div>
                <div className="tasks">
                </div>
            </div>
        );
     };
}


export default Sidebar;