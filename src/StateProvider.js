
import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();


// Wrap our App and Provide the data Layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider> 
);
 

// Pull the information from the data layer
export const useStateValue = () => useContext(StateContext);