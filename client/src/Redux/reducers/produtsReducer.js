import { FETCH_DETAILS_ERROR, FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/actionsProducts"

const initialState = {
    details:{},
    loading:false,
    products:[],
    error:''
}

export const productsReducer = (state=initialState,actions)=>{

    switch(actions.type){
        
        case FETCH_PRODUCTS_REQUEST:
            return{
                details: {},
                loading:true,
                products:[],
                error:''
            }
        case FETCH_PRODUCTS_SUCCESS:
            return{
                details: {},
                loading:false,
                products:actions.payload,
                error:''
            }
        case FETCH_PRODUCTS_ERROR:
            return{
                details: {},
                loading:false,
                products:[],
                error:actions.payload
            }
        case FETCH_DETAILS_REQUEST:
            return{
                details: {},
                loading:true,
                products:[],
                error:''
            }
        case FETCH_DETAILS_SUCCESS:
            return{
                details: actions.payload,
                loading:false,
                products:[],
                error:''
            }
        case FETCH_DETAILS_ERROR:
            return{
                details: {},
                loading:false,
                products:[],
                error:actions.payload
            }
        default:{
            return state
        }
    }

}