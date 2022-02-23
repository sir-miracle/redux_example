//these will be action creators.
//we import the action types we created from the actionTypes file

import {ADDITION, SUBTRACTION} from './actionTypes';

//we now build action creators - functions that point tot the action types
 export const addition =(number)=>({
    type: ADDITION,
    toAdd: number,
    
 });
   
 export const subtraction =()=>({
    type: SUBTRACTION
 })

 