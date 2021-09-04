import * as React from 'react'
import dayjs from 'dayjs'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'dayjs/locale/zh-cn'

import Home from '@/page/salmonRun'
import Header from '@/components/header'
import { isPhone } from '@/utils/util'

import '@/style/common.scss'

dayjs.locale('zh-cn')

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
