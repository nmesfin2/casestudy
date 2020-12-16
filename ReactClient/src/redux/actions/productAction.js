import { ADDPRODUCT_SUCCESS, ADDPRODUCT_FAIL } from "./types"
import axios from 'axios'

export const productAdd = formData => async dispatch => {
    try {
        const res = await axios.post('http://localhost:9010/api/v1/product', formData)
        // .then(res => console.log(JSON.stringify(res)))
        // .catch(err =>console.log(JSON.stringify(err)))
        dispatch({
            type: ADDPRODUCT_SUCCESS,
            payload: res.data 
        })

    }catch(err){
        dispatch({
            type:ADDPRODUCT_FAIL
        })
    }
}
