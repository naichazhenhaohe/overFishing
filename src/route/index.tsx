import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@/page/salmonRun'
import Header from '@/components/header'

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
