import React from 'react'
import '../css/ListProducts.css'
import { CardProduct } from './CardProduct'


export const ListProducts = ({ products }) =>{

    const header = products.filters && products.filters[0].values[0].path_from_root.map(p=>p.name).join('> ')
    const store = products.available_filters.filter(p => p.id === 'official_store')
    const location = products.available_filters.filter(p=> p.id === 'state')
    const model = products.available_filters.filter(p=> p.id === 'MODEL')
    const version = products.available_filters.filter(p=> p.id === 'SHORT_VERSION')
    const price = products.available_filters.filter(p=> p.id === 'price')
   
    return(
           
            <div className='mt-3'>
                <div className='mx-5 p-3 d-flex flex-column'>
                    <span className='text-secondary' >{header}</span>
                    <h3 className='text-dark'>{products.query}</h3>
                    <span className='text-secondary'>{products.paging.total} resultados</span>
                </div>
                <div className='row'>
                    <div className='col-4'>
                       <div className='row'>
                           <div className='col-12 mx-5 px-4 py-1 d-flex flex-column'>
                               <h5 className='text-dark'>Tiendas Oficiales</h5>
                               <span className='text-secondary'>solo tiendas Oficiales ({store[0].values[0].results})</span>
                           </div>
                           <div className='col-12 mx-5 px-4 py-1 d-flex flex-column'>
                               <h5 className='text-dark'>Ubicación</h5>
                               {
                                   location && location[0].values.slice(0,10).map(l=>{
                                       return(
                                           <span className='text-secondary' key={l.name}>{l.name} ({l.results})</span>
                                       )
                                   })
                               }
                           </div>
                           <div className='col-12 mx-5 px-4 py-1 d-flex flex-column'>
                               <h5 className='text-dark'>Modelo</h5>
                               {
                                   model && model[0].values.slice(0,10).map(m=>{
                                       return(
                                           <span className='text-secondary' key={m.name}>{m.name} ({m.results})</span>
                                       )
                                   })
                               }
                           </div>
                           <div className='col-12 mx-5 px-4 py-1 d-flex flex-column'>
                               <h5 className='text-dark'>Versiones</h5>
                               {
                                   version && version[0].values.slice(0,10).map(v=>{
                                       return(
                                           <span className='text-secondary' key={v.name}>{v.name} ({v.results})</span>
                                       )
                                   })
                               }
                           </div>
                           <div className='col-12 mx-5 px-4 py-1 d-flex flex-column'>
                               <h5 className='text-dark'>Precio | $ u$S</h5>
                               {
                                   price && price[0].values.map(p=>{
                                       return(
                                           <span className='text-secondary' key={p.name}>{p.name} ({p.results})</span>
                                       )
                                   })
                               }
                           </div>
                           
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