import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../css/ListProducts.css'

export const CardProduct = ({result})=>{
    
    const km = result.attributes.filter(r => r.name === 'Kilómetros')
    const year = result.attributes.filter(r => r.name === 'Año')
    
    return(
        
        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 border-0'>
            <Link to={`/items/${result.id}`} className="text-decoration-none border-0 p-0" >
            <div className="card card-product">
                <div className='container-img'>
                <img src={result.thumbnail.replace('-I.jpg','-O.jpg')} className="img-fluid images" alt={result.thumbnail}/>
                </div>
                
                <div className="card-body d-inline-block">
                    <h6 className="m-0 text-dark font-weight-bold">{result.currency_id}$ {result.price}
                    </h6>
                    {year.length ? <span className='text-secondary'>{ year[0].value_name }|</span>: <span></span>} 
                    {km.length? <span> {km[0].value_name}</span>: <span></span>}
                    <p className="text-dark">{result.title}</p>
                    <span className="text-secondary">{result.location && result.location.state.name}</span>
                </div>
            
            </div>
            </Link>
        </div>
        
    )
}