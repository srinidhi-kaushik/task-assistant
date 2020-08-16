import React, { Component } from 'react';
import CreateEvent from './CreateEvent'

class Sidebar extends Component{
    // state = {};
     render() {
        return(
            <div className="side-bar">
                <div className="sidebar-title">
                    <h3>Tasks</h3>
                    {/* <button className="create-button" type="button"><i className="fas fa-plus fa-lg"></i> Create</button> */}
                    <CreateEvent className="create-button"/>
                </div>
                <div className="tasks">
                    
                </div>
            </div>
        );
     };
}


export default Sidebar;