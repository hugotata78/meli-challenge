import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../css/ListProducts.css'

export const CardProduct = ({result})=>{
    console.log(result.attributes)
    return(
        
        <div className='col-lg-4 col-md-6 col-sm-12 my-1 mx-0 p-0'>
            <Link to={`/items/${result.id}`} className="text-decoration-none border-0 p-0" >
            <div className="card card-product">
                <div className=''>
                <img src={result.thumbnail.replace('-I.jpg','-O.jpg')} className="imagen" alt={result.thumbnail}/>
                </div>
                <div className="card-body d-inline-block">
                    <h5 className="m-0 text-dark">{result.price.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS"
                    })}
                    </h5>
                    <p className="text-dark">{result.title}</p>
                    <span className="text-secondary">{result.location.state.name}</span>
                </div>
            
            </div>
            </Link>
        </div>
        
    )
}