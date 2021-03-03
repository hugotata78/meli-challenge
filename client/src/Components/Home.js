import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/actions/actionsProducts'
import { Products } from './Products'

export const Home = ()=>{

    const history = useHistory()
    const loading = useSelector(state=> state.productsReducer.loading) 
    const products = useSelector(state=> state.productsReducer.products)
    const error = useSelector(state => state.productsReducer.error)  
    const dispatch = useDispatch()

    const onSearch = (query)=>{
        history.push(`/search?q=${query}`)  
        dispatch(fetchProducts(query)) 
    }

    return(
        <div>
            <NavBar onSearch={onSearch}/>
            <Products loading={loading} products={products} error={error}/>
        </div>
    )
}