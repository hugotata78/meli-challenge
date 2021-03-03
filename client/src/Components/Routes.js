import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Home } from './Home'


export const Routes = ()=>{

    return(
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    )
}