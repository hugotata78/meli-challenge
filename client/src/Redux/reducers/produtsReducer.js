import { DETAILS_PRODUCT, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/actionsProducts"

const initialState = {
    detalis:{},
    loading:false,
    products:[],
    error:''
}

export const productsReducer = (state=initialState,actions)=>{

    switch(actions.type){
        case DETAILS_PRODUCT:
            return{
                detalis: actions.payload,
                loading:false,
                products:[],
                error:''
            }
        case FETCH_PRODUCTS_REQUEST:
            return{
                detalis: {},
                loading:true,
                products:[],
                error:''
            }
        case FETCH_PRODUCTS_SUCCESS:
            return{
                detalis: {},
                loading:false,
                products:actions.payload,
                error:''
            }
        case FETCH_PRODUCTS_ERROR:
            return{
                detalis: {},
                loading:false,
                products:[],
                error:actions.payload
            }
        default:{
            return state
        }
    }

}