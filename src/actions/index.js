import axios from 'axios';

export const getSmurfs = () => {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchError(err));
        })
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (smurfs)=> {
    return({type: FETCH_SUCCESS, payload:smurfs});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (newSmurf) => {
    return ({type: ADD_SMURF, payload:newSmurf});
}

export const CHANGE_ERROR = "CHANGE_ERROR";

export const changeError = (word) => {
    return ({type: CHANGE_ERROR, payload:word});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.