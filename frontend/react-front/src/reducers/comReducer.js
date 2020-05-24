import {
    DETAIL_COMMUNITY,
    DELETE_COMMUNITY,
    PUT_COMMUNITY
} from 'actions/types';

const initialState = {
    community: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case DETAIL_COMMUNITY:
            console.log('com-reducer 실행');
            console.log(action.payload)
            return {
                ...state,
                community: action.payload,
            }

        case DELETE_COMMUNITY:
            console.log('delete-reducer 실행')
            return{
                ...state
            } 
        case PUT_COMMUNITY:
            console.log('put-reducer 실행')
            return{
                ...state,
                community: action.payload,
            }
        default:
            return state
    }
}
  
