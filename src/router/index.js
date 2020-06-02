import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import asyncComponent from '@/utils/asyncComponent'

// import home from '@/pages/home/home'
const login = asyncComponent(() => import("@/pages/login/login"))
// const profile = asyncComponent(() => import("@/pages/profile/profile"))


export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component= {login}/>
          <Redirect exact from='/' to='/login'/>
          <Route component= {login}/>
        </Switch>
      </HashRouter>
    )
  }
}