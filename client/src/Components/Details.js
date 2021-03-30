import React from 'react'
import '../css/details.css'

export const Details = ({ details })=>{
    
    const img = details.thumbnail && details.thumbnail.replace('-I.jpg','-O.jpg')
    const price = details.price && details.price.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
        })
        console.log(details.attributes)
    return(
        
            <div className='details'>
                <h1>{details.title}</h1>
                <img className="imgProduct" src={img} alt="" />
                <h2>
                {price}
                </h2>
        
            </div>
           
    )
}