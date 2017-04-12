import { combineReducers } from 'redux';
import ProfileReducer from '../reducers/reducer_profile';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    profile: ProfileReducer
});

export default rootReducer;