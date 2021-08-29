import axios from 'axios';

export const FETCH_SMURFS = "Get Smurfs";
export const SET_SMURFS = "Got Smurfs";
export const FAILED_SMURFS = "Failed to get Smurfs";
export const ADD_SMURF = "Add Smurf";
export const ERROR_LOADING = "Error Loading Page";

export const fetchSmurfs = () => dispatch => {
    axios.get('http://localhost:3333/smurfs').then(res => {
    console.log(res);
    const name = res.data.name;
    const position = res.data.position;
    const nickname = res.data.nickname;
    const description = res.data.description;
    dispatch(setSmurfs(name, position, nickname, description))
    })
}

export const setSmurfs = (name, position, nickname, description) => {
    console.log(name);
    console.log(position);
    console.log(nickname);
    console.log(description);
    return {type: SET_SMURFS, name, position, nickname, description}
}

export const addSmurf = (name, position, nickname, description) => {
    return {type: ADD_SMURF, name, position, nickname, description}
}

export const errorLoading = () => dispatch => {
    return {errorLoading: "Error Loading"}
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.