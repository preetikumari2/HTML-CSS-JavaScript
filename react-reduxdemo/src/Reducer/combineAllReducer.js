import counterReducer from "./counterReducer";
import signInReducer from "./signInReducer";
import {combineReducers} from 'redux'


const combineAllReducer = combineReducers(
    {
        counter: counterReducer,
        signin: signInReducer
    }
)
export default combineAllReducer;