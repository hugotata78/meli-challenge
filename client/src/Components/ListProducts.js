import React from 'react'
import '../css/ListProducts.css'
import { CardProduct } from './CardProduct'


export const ListProducts = ({ products }) =>{

    const header = products.filters && products.filters[0].values[0].path_from_root.map(p=>p.name).join('> ')
    
    return(
           
            <div className='mt-3'>
                <div className='mx-5 p-3 d-flex flex-column'>
                    <span className='text-secondary' >{header}</span>
                    <h3 className='text-dark'>{products.query}</h3>
                    <span className='text-secondary'>{products.paging.total} resultados</span>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-4'>
                       <div className='row'>
                           {
                              products.available_filters && products.available_filters.map((p,index)=>{
                                   if(p.id === 'official_store'){
                                       return(
                                           <div className='col-6 col-sm-12 mx-5 px-4 py-1 d-flex flex-column' key={index}>
                                               <h5 className='text-dark'>{p.name}</h5>
                                               <span>{p.values[0].name} ({p.values[0].results})</span>     
                                           </div>
                                       )
                                   }else{
                                       return(
                                        <div className='col-6 col-sm-12 mx-5 px-4 py-1 d-flex flex-column' key={index}>
                                            <h5 className='text-dark'>{p.name}</h5>
                                               {
                                                   p.values.slice(0, 10).map(m => {
                                                       return (
                                                           <span className='text-secondary' key={m.name}>{m.name} ({m.results})</span>
                                                       )
                                                   })
                                               }
                                        </div>
                                       )
                                   }
        
                            })
                           }
                        </div>
                        </div>
                    <div className='col-8 d-flex justify-content-center'>
                    <div className='row '>
                        {products.results && products.results.map((result) => {
                            return (
                                <CardProduct result={result} key={result.id} />
                            )
                        })}
                    </div>
                    </div>
                </div>
            </div>
        
    )
}