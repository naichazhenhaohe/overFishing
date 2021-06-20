import * as React from 'react'
import moment from 'moment'
import { Phase } from '../index'

import './index.scss'

interface Props {
  phase: Phase
}

export default ({ phase }: Props) => {
  const endTime = moment(phase.EndDateTime + '+00:00')
  const startTime = moment(phase.StartDateTime + '+00:00')
  return (
    <div className="salmon-run-card-box">
      <div>开始时间{startTime.format('MM/DD (dd) HH:mm a')}</div>
      <div>结束时间{endTime.format('MM/DD (dd) HH:mm a')}</div>
    </div>
  )
}
