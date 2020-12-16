const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated :false,
    loading: true,
    isRegistered: false,
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

    default:
        return state
    }
}
