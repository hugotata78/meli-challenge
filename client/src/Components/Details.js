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
        
            <div className='details p-5'>
               <div className='container p-5 bg-light'>
                   <div className='row p-3'>
                       <div className='col-8 d-flex justify-content-center align-items-center'>
                         <img className="img-fluid w-100" src={img} alt="" />
                       </div>
                       <div className='col-4 p-3 border rounded'>
                         <h3>{details.title}</h3>
                         <p>{price}</p>
                       </div>
                   </div>
                   
               </div>        
            </div>
           
    )
}