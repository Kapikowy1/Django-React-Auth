import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
} from '../actions/myTypes';

const initialState = {
    isAuthenticated:null,
    username:'',
    first_name:'',
    last_name:'',
    phone:'',
    city:''
};

export default function(state = initialState,action) {
    const {type,payload} = action;

    switch(type) {
        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: payload
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: false
            }
            
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_FAIL:
        case LOGOUT_FAIL:        
        case REGISTER_FAIL:
            return state
        default:
            return state        
    };
};