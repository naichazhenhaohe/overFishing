import * as React from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'

import Card from './components/card'

import './index.scss'

import { MonthlyRewardGears, Phases } from '@/utils/coop.json'

moment.locale('zh-cn')

export default () => {
  const [visibleNumber, setVisibleNumber] = React.useState(5)

  const rotation = Phases.filter(phase => {
    const end = moment(phase.EndDateTime + '+00:00')
    return end.isAfter(moment())
  }).slice(0, visibleNumber)

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const { scrollHeight, scrollTop, clientHeight } = e.target as HTMLElement

    console.log(scrollHeight - scrollTop <= clientHeight + 100)
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      setVisibleNumber(visibleNumber + 5)
    }
  }

  return (
    <div className="salmon-run" onScroll={handleScroll}>
      {rotation.map((item, index) => (
        <Card phase={item} key={index} />
      ))}
    </div>
  )
}
