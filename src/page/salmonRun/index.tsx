import * as React from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'

import Card from './components/card'

import { MonthlyRewardGears, Phases } from '@/utils/coop.json'

moment.locale('zh-cn')

export interface Phase {
  EndDateTime: string
  RareWeaponID: number
  StageID: number
  StartDateTime: string
  WeaponSets: number[]
}

export default () => {
  const [visibleNumber, setVisibleNumber] = React.useState(5)

  const rotation = Phases.filter(phase => {
    const end = moment(phase.EndDateTime + '+00:00')
    return end.isAfter(moment())
  }).slice(0, visibleNumber)

  return (
    <div className="home">
      {rotation.map((item, index) => (
        <Card phase={item} key={index} />
      ))}
    </div>
  )
}
