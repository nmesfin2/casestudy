import { LOGOUT, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions/types"


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated :false,
    loading: true,
    isRegistered: false,
    user:null
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {

        case REGISTER_SUCCESS:
            return { ...state, ...payload, 
            isAuthenticated:false,
            isRegistered: true,
            loading:false  
        }
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated:true
            }
            case LOGOUT:
                return {
                    ...state,
                    token: null,
                    isAuthenticated:false,
                    user: null
                }

    default:
        return state
    }
}
