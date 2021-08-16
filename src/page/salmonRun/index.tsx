import * as React from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import Card from './components/card'

import './index.scss'

import { MonthlyRewardGears, Phases } from '@/utils/coop.json'

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault(dayjs.tz.guess())

export default () => {
  const [visibleNumber, setVisibleNumber] = React.useState(5)

  const rotation = Phases.filter(phase => {
    const end = dayjs(phase.EndDateTime)
    return end.isAfter(dayjs())
  })
    .slice(0, visibleNumber)
    .map(item => {
      const reward = MonthlyRewardGears.find(reward => reward.DateTime === item.StartDateTime)

      if (reward) {
        return {
          ...item,
          ...reward
        }
      }
      return item
    })

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
