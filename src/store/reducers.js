//this will hold pure js fucntions that update the state by taking state and action as parameters
//this is actually where the state is modified
import { ADDITION, SUBTRACTION } from './actionTypes';

//first we build the initial state
const initialState = {
    counter: 0
};

//we now describe how our state will be modified depending on 
//whether addition or subtraction is called, by creating a reducer.

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITION:
            return { ...state, counter: state.counter + action.toAdd }
        case SUBTRACTION:
            return { ...state, counter: state.counter - 1 }
            default:
                return state //nothing happened, so return state as it was
    };
};

