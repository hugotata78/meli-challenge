import React from 'react'
import { useSelector } from 'react-redux'
import '../css/Products.css'
import { ListProducts } from './ListProducts'
import NavBar from './NavBar'



export const Products = ()=>{
    
    const loading = useSelector(state=>state.productsReducer.loading)
    const products = useSelector(state=>state.productsReducer.products)
    const error = useSelector(state => state.productsReducer.error)
    
    return(
        <div className='products'>
            <NavBar/>
            {loading && <span className='loading'>Cargando ...</span>}
            {products.length > 0 && <ListProducts products={products}/>}
            {error && <span className='error'>{error}</span>}
        </div>
    )
}