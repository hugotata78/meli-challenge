import axios from 'axios'


export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
export const FETCH_DETAILS_REQUEST = 'FETCH_DETAILS_REQUEST'
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS'
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR'


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
        axios.get(`http://localhost:3001/search?q=${value}`)
        .then(response=>{
            response.data.length > 0?
            dispatch(fetchProductsSuccess(response.data))
            :
            dispatch(fetchProductsError('Producto no encontrado'))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const fetchDetailsRequest = ()=>{
    return {
        type: FETCH_DETAILS_REQUEST
    }
}

export const fetchDetailsSuccess = (results)=>{
    return {
        type: FETCH_DETAILS_SUCCESS,
        payload: results,
    }
}

export const fetchDetailsError = (error)=>{
    return{
        type:FETCH_DETAILS_ERROR,
        payload: error
    }
}
export const fetchDetailsProduct = (id)=>{
    return (dispatch)=>{
        dispatch(fetchDetailsRequest())
        axios.get(`http://localhost:3001/items/${id}`)
        .then(response =>{
            dispatch(fetchDetailsSuccess(response.data))
        })
        .catch(err=>dispatch(fetchDetailsError('No podemos conectar con la Base de datos. Verifique su conexion')))
    }
}