import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@/page/salmonRun'
import Header from '@/components/header'

import isPhone from '@/utils/isPhone'

export default () => {
  return (
    <BrowserRouter basename="/overfishing">
      {/* <Header /> */}
      {isPhone ? (
        <div>骚奥瑞，在电脑上访问哦</div>
      ) : (
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      )}
    </BrowserRouter>
  )
}
