import React, { useState } from 'react'
import '../css/details.css'

export const Details = ({ details })=>{
    

    const [imgDefault,setImgDefault] = useState(details.thumbnail && details.thumbnail.replace('-I.jpg','-O.jpg')) 
    const imgChange = (img)=>{
      setImgDefault(img)
    }
    const technical_sheet = details.attributes && details.attributes.filter(d=>{
      return d.id === 'COLOR' || d.id === 'DOORS' || d.id === 'ENGINE' || d.id === 'FUEL_TYPE' || d.id === 'KILOMETERS' || d.id === 'TRANSMISSION' || d.id === 'VEHICLE_BODY_TYPE' || d.id === 'VEHICLE_YEAR'
    })
    const header = technical_sheet && technical_sheet.filter(t=> t.id === 'VEHICLE_YEAR' || t.id === 'KILOMETERS').map(t=>t.value_name).reverse().join(' | ')
    
    return(
        
            <div className='details p-5'>
               <div className='container bg-light'>
                 <div className='d-flex flex-row'>
                   <div className='d-flex flex-column justify-content-start m-0 p-3' style={{width:'10%'}}>
                      {
                        details.pictures && details.pictures.slice(0,8).map(p=>{
                          return(
                            <div col='col-12 border-dark rounded p-3'>
                              <img className='img-fluid  mt-2 ' onMouseOver={e=> imgChange(p.url)} src={p.url} alt='img' style={{width:'50px', height:'50px'}}/>
                            </div>
                            )
                        })
                      }
                   </div>
                   <div className='d-flex flex-column'>
                   <div className='row p-3'>
                       <div className='col-12 col-sm-8 p-2 d-flex justify-content-center align-items-center'>
                          <img className="img-fluid w-100" src={imgDefault} alt="img" />
                       </div>
                       <div className='col-12 col-sm-4 p-2 p-sm-2'>
                         <div className=' border rounded'>
                           <span className='text-secondary m-2'>{header}</span>
                           <h4 className='text-dark m-2'>{details.title}</h4>
                           <p className='text-secondary m-2'>{details.currency_id}$ {details.price}</p>
                         </div>
                       </div>
                   </div>
                   <div className='mt-5'>
                   <div className='row mt-5'>
                   <div className='col-12 col-sm8 p-2 p-sm-5'>
                   <hr/>
                           <h4 className='text-dark m-3'>Ficha Técnica</h4>
                           <div className='d-flex justify-content-center align-items-center'>
                           <table className="table table-striped">
                             <tbody>
                               {
                                 technical_sheet && technical_sheet.map(t=>{
                                   return(
                                     <tr key={t.name}>
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
                         <div className='col-4'></div>
                   </div> 
                   </div>
                   </div>
                 </div>
               </div>        
            </div>
           
    )
}