import React from 'react'
import '../css/details.css'

export const Details = ({ details })=>{
    
    const img = details.thumbnail && details.thumbnail.replace('-I.jpg','-O.jpg')   
    const technical_sheet = details.attributes && details.attributes.filter(d=>{
      return d.id === 'COLOR' || d.id === 'DOORS' || d.id === 'ENGINE' || d.id === 'FUEL_TYPE' || d.id === 'KILOMETERS' || d.id === 'TRANSMISSION' || d.id === 'VEHICLE_BODY_TYPE' || d.id === 'VEHICLE_YEAR'
    })
    const header = technical_sheet && technical_sheet.filter(t=> t.id === 'VEHICLE_YEAR' || t.id === 'KILOMETERS').map(t=>t.value_name).reverse().join(' | ')
    
    return(
        
            <div className='details p-5'>
               <div className='container p-3 bg-light'>
                   <div className='row p-2'>
                       <div className='col-8 d-flex justify-content-center align-items-center'>
                       <img className="img-fluid w-100" src={img} alt="img" />
                       </div>
                       <div className='col-4 p-3 border rounded'>
                         <span className='text-secondary m-2'>{header}</span>
                         <h4 className='text-dark m-2'>{details.title}</h4>
                         <p className='text-secondary m-2'>{details.currency_id}$ {details.price}</p>
                       </div>
                   </div>
                   
                   <div className='row mt-5'>
                   <div className='col-8 p-5'>
                   <hr/>
                           <h4 className='text-dark m-3'>Ficha Técnica</h4>
                           <div className='d-flex justify-content-center align-items-center' style={{width:'100%'}}>
                           <table class="table table-striped">
                             <tbody>
                               {
                                 technical_sheet && technical_sheet.map(t=>{
                                   return(
                                     <tr>
                                       <td>{t.name}</td>
                                       <td>{t.value_name}</td>
                                     </tr>
                                   )
                                 })
                               }
                             </tbody>
                           </table>
                           </div>
                         </div>
                   </div> 
               </div>        
            </div>
           
    )
}