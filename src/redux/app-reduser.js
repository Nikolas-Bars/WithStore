import React from "react";
import {getAuthUserData} from "./auth-reduser";

const INITIALIZATED_SUCSESS = 'INITIALIZATED_SUCSESS'

let initialState = {
    initialize: false
}

const appReducer =(state = initialState, action)=> {
        switch (action.type) {
            case INITIALIZATED_SUCSESS: {
              return {
                  ...state,
                  initialize: true
              }
            }default: return state
        }
}

export const initializedSuccess = () => ({type: INITIALIZATED_SUCSESS});
export const initializeApp = () => (dispatch) =>{

    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(()=> {
        dispatch(initializedSuccess())
    });
}

export default appReducer