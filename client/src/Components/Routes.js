import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect } from 'react/cjs/react.production.min'
import { fetchDetailsProduct } from '../Redux/actions/actionsProducts'
import { Home } from './Home'
import { Product } from './Product'


export const Routes = ()=>{
    

    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/items/:id' component={Product}/>
        </Switch>
    )
}