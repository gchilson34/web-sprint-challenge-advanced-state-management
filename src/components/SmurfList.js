import React from 'react';
import Smurf from './Smurf';
import { initialState } from '../reducers';

 const SmurfList = (props) => {
    props = initialState;

    if (initialState.isLoading === true) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        <Smurf smurf={initialState.smurfs}/>
    </div>);
}

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.