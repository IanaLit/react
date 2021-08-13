import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { About } from "../pages/about"
import { Dashboard } from "../pages/dashboard"
import { NotFound } from "../pages/notFound/notFound"

export const AppRouter = () => {
    return (
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            
            <Route path="/error">
                <NotFound/>
            </Route>
            <Route exact path="/">
                <Dashboard/>
            </Route>
            <Redirect to= "/error"/>
        </Switch>
    )
}