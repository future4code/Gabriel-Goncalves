import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Quina from "../Pages/Quina/Quina";
import Timemania from "../Pages/Timemania/Timemania";
import DiaDeSorte from "../Pages/DiaDeSorte/DiaDeSorte";
import Lotofacil from "../Pages/Lotofacil/Lotofacil";
import MegaSena from "../Pages/Mega-Sena/Mega-Sena";
import Lotomania from "../Pages/Lotomania/Lotomania"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MegaSena />
                </Route>
                <Route exact path="/Quina">
                    <Quina />
                </Route>
                <Route exact path="/Timemania">
                    <Timemania />
                </Route>
                <Route exact path="/Lotomania">
                    <Lotomania />
                </Route>
                <Route exact path="/Lotofacil">
                    <Lotofacil />
                </Route>
                <Route exact path="/DiaDeSorte">
                    <DiaDeSorte />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes