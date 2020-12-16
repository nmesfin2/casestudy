import { ADDPRODUCT_SUCCESS, ADDPRODUCT_FAIL } from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated :false,
    loading: true,
    errorOccured: false,
    user:null
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

    case ADDPRODUCT_SUCCESS:
        return { ...state, ...payload, 
            isAuthenticated:false,
            loading:false 
            
        }
        case ADDPRODUCT_FAIL:
            return{
                errorOccured:true 
            }

    default:
        return state
    }
}
