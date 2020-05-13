import { combineReducers } from 'redux';
import authReducer from 'reducers/authReducer';
import comReducer from 'reducers/comReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    community: comReducer,
});

export default rootReducer;
