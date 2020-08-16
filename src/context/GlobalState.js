import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import moment from 'moment'

//Initial State
const initialState = {
    events: [
        // {
        //     start: moment().toDate(),
        //     end: moment().add(3, "days").toDate(),
        //     title: "Global Event"
        // },
        {
            start: moment().add(10, "days").toDate(),
            end: moment().add(12, "days").toDate(),
            title: "Testing 2"
        }
    ]
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

    return (
        <GlobalContext.Provider value = {{ 
            events: state.events,
            addEvent
             }}>
            {children}
        </GlobalContext.Provider>
    );
}