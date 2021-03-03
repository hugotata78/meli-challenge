import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ListProducts.css'

export const ListProducts = ({ products }) =>{
    return(
        
            <div>
            {products && products.map((result) => (
                
            <Link key={result.id} to={`/${result.id}`} className="item">
                <img className="imagen" src={result.thumbnail.replace('I.jpg','B.jpg')} alt="" />
                <div className="meta">
                <h3>{result.title}</h3>
                <h4>
                {result.price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS"
                })}
                </h4>
            </div>
            </Link>
            ))}
        </div>
        
    )
}