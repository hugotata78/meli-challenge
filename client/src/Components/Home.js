import React  from 'react'
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import { Products } from './Products'


export const Home = ()=>{

    const loading = useSelector(state=>state.productsReducer.loading)
    const products = useSelector(state=>state.productsReducer.products)
    const error = useSelector(state => state.productsReducer.error)

    return(
        <div>
            <NavBar/>
            <Products loading={loading} products={products} error = {error}/>
        </div>
    )
}