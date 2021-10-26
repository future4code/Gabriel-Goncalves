import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Páginas/Login'
import Cadastro from '../Páginas/Cadastro'
import Feed from '../Páginas/Feed'
import Post from '../Páginas/Post'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Login}/>
                <Route exact path={'/cadastro'} component={Cadastro}/>
                <Route exact path={'/feed'} component={Feed}/>
                <Route exact path={'/post'} component={Post}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router