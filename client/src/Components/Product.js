import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Details } from './Details'
import '../css/Product.css'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchDetailsProduct } from '../Redux/actions/actionsProducts'

export const Product = ()=>{
  
    const { id } = useParams()
    const dispatch = useDispatch()
    const details = useSelector(state => state.productsReducer.details)
    const loading = useSelector(state => state.productsReducer.loading)
    const error = useSelector(state => state.productsReducer.error)

    useEffect(()=>{
        dispatch(fetchDetailsProduct(id))
    },[dispatch,id])
    
    return (
        <div className='Product'>
            <NavBar/>
            {loading && <span className='loading'>Cargando ...</span>}
            {details && <Details details={details}/>}   
            {error && <span className='error'>{error}</span>}         
        </div>
    )
}