import React from 'react'

export const Details = ({ details })=>{
    
    const img = details.thumbnail && details.thumbnail.replace('-I.jpg','-B.jpg')
    const price = details.price && details.price.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
        })
    return(
        
            <div>
                <h1>{details.title}</h1>
                <img className="imgProduct" src={img} alt="" />
                <h2>
                {price}
                </h2>
        
            </div>
           
    )
}