import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@/page/salmonRun'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
