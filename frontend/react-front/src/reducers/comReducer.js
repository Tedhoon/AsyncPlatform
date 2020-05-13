import {
    DETAIL_COMMUNITY
} from 'actions/types';

const initialState = {
    community: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case DETAIL_COMMUNITY:
            console.log('com-reducer 실행');
            return {
                ...state,
                community: action.payload,
            }
        default:
            return state
    }
}
  
