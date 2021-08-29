import * as React from 'react'
import dayjs from 'dayjs'

import Card from './components/card/index'
import FilterBox from './components/filterBox/index'
import { FilterOptions } from './components/filterBox/index'

import './index.scss'

import { MonthlyRewardGears, Phases } from '@/utils/coop.json'

export default () => {
  const [visibleNumber, setVisibleNumber] = React.useState(5)
  const [options, setOptions] = React.useState<FilterOptions[]>([
    {
      label: '大坝',
      value: 5000,
      checked: true
    },
    {
      label: '破难船',
      value: 5001,
      checked: true
    },
    {
      label: '破屋/集落',
      value: 5002,
      checked: true
    },
    {
      label: '工坊/工房',
      value: 5003,
      checked: true
    },
    {
      label: '箱舟/北极星',
      value: 5004,
      checked: true
    }
  ])

  const rotation = Phases.filter(phase => {
    const end = dayjs(phase.EndDateTime)
    const selectedStage = options.filter(option => option.checked).map(item => item.value)

    return end.isAfter(dayjs()) && selectedStage.includes(phase.StageID)
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

    if (scrollHeight - scrollTop <= clientHeight + 100) {
      setVisibleNumber(visibleNumber + 5)
    }
  }

  return (
    <div className="salmon-run" onScroll={handleScroll}>
      <FilterBox options={options} setOptions={setOptions} />
      {rotation.map((item, index) => (
        <Card phase={item} key={index} isLatestIssue={index === 0} />
      ))}
    </div>
  )
}
