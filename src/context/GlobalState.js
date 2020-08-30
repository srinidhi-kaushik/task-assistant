import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//import moment from 'moment' --> Use for test case

//Initial State
const initialState = {
    events: [
        // {
        //     //test case
        //     id: 0,
        //     start: moment().add(10, "days").toDate(),
        //     end: moment().add(12, "days").toDate(),
        //     title: "Testing",
        //     startDate: "2020-09-09",
        //     startTime: "",
        //     endDate: "2020-09-11",
        //     endTime: ""
        // }
    ], 
    idNum: 0
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addEvent(event) {
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        });
    }

    function deleteEvent(id) {
        dispatch({
            type: 'DELETE_EVENT',
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value = {{ 
            events: state.events,
            idNum: state.idNum,
            addEvent, deleteEvent
             }}>
            {children}
        </GlobalContext.Provider>
    );
}