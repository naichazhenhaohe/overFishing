import * as React from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'

import Card from './components/card'

import './index.scss'

import { MonthlyRewardGears, Phases } from '@/utils/coop.json'

moment.locale('zh-cn')

export default () => {
  const [visibleNumber, setVisibleNumber] = React.useState(15)

  const rotation = Phases.filter(phase => {
    const end = moment(phase.EndDateTime + '+00:00')
    return end.isAfter(moment())
  }).slice(0, visibleNumber)

  return (
    <div className="salmon-run">
      {rotation.map((item, index) => (
        <Card phase={item} key={index} />
      ))}
    </div>
  )
}
