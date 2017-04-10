import { combineReducers } from 'redux';
import UserNameReducer from '../reducers/reducer_profile';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    userName:UserNameReducer
});

export default rootReducer;