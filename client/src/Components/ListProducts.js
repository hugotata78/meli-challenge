import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ListProducts.css'
import { CardProduct } from './CardProduct'


export const ListProducts = ({ products }) =>{

   
    return(
        
            <div className='container mt-3'>
                <div className='row'>
                  {products.map((result) =>{
                      return(
                          <CardProduct result={result} key={result.id}/>
                      )
                  } )}
                </div>
            </div>
        
    )
}