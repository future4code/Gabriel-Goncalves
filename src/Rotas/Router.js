import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Páginas/Login'
import Cadastro from '../Páginas/Cadastro'
import Feed from '../Páginas/Feed'
import Post from '../Páginas/Post'
import Erro from '../Páginas/Erro'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Login}/>
                <Route exact path={'/cadastro'} component={Cadastro}/>
                <Route exact path={'/feed'} component={Feed}/>
                <Route exact path={'/post/:id'} component={Post}/>
                <Route component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router