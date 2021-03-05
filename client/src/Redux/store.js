import { applyMiddleware, createStore } from "redux";
import {rootReducers} from "./reducers/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { fetchDetailsProduct } from "./actions/actionsProducts";







const store = createStore(rootReducers,
    
    composeWithDevTools(
    applyMiddleware(thunk)
))


store.dispatch(fetchDetailsProduct('MLA619208970'))
export { store }