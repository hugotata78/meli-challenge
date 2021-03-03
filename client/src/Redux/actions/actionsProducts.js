import axios from 'axios'

export const DETAILS_PRODUCT = 'DETAILS_PRODUCT'
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'


export const detailsProduct = (id)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/api/items/${id}`)
        .then(response =>{
            dispatch({
                type:DETAILS_PRODUCT,
                payload: response.data
            })
        })
    }
}

export const fetchProductsRequest = ()=>{
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (results)=>{
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: results,
    }
}

export const fetchProductsError = (error)=>{
    return{
        type:FETCH_PRODUCTS_ERROR,
        payload: error
    }
}

export const fetchProducts = (value)=>{
    return (dispatch)=>{
        dispatch(fetchProductsRequest())
        axios.get(`http://localhost:3001/api/search?q=${value}`)
        .then(response=>{
            dispatch(fetchProductsSuccess(response.data))
        })
        .catch(err=>{
            dispatch(fetchProductsError('Page not found. Possibly the entered parameters are not correct or we do not have records in our database of the requested product.'))
        })
    }
}