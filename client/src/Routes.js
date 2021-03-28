import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Home } from './Components/Home'
import { Product } from './Components/Product'
import { Products } from './Components/Products'


export const Routes = ()=>{
    
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Products}/>
            <Route path='/items/:id' component={Product}/>
        </Switch>
    )
}