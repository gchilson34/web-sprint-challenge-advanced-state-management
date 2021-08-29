import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { FETCH_SMURFS, GOT_SMURFS, FAILED_SMURFS, ADD_SMURF, ERROR_LOADING } from "../actions";

export const initialState = {
    smurfs: [],
    isLoading: false,
    errorLoading: ""
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_SMURFS:
            console.log(action);
            return {...state, isLoading: !state.isLoading}
        case GOT_SMURFS:
            console.log(action);
            return {...state, smurfs: action.gotSmurfs}
        case FAILED_SMURFS:
            console.log(action);
            return {...state, errorLoading: action.errorLoading}
        case ADD_SMURF:
            console.log(action);
            return {...state, smurfs: action.addSmurf}
        case ERROR_LOADING:
            console.log(action);
            return {...state, errorLoading: action.addErrorMessage}
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.