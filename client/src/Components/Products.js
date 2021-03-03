import React from 'react'
import '../css/Products.css'
import { ListProducts } from './ListProducts'

export const Products = ({ loading, products, error})=>{
    
    return(
        <div className='products'>
            {loading && <span className='loading'>Cargando ...</span>}
            {products.length > 0 && <ListProducts products={products}/>}
            {error && <span className='error'>{error}</span>}
        </div>
    )
}