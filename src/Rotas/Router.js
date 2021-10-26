import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Páginas/Login/Login'
import Cadastro from '../Páginas/Cadastro/Cadastro'
import Feed from '../Páginas/Feed/Feed'
import Post from '../Páginas/Post/Post'
import Erro from '../Páginas/Erro/Erro'
import Header from '../Header/Header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
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