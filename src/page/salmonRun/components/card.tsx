import * as React from 'react'
import moment from 'moment'

import { weapons } from '@/utils/WeaponInfo_Main.json'
import stages from '@/utils/MapInfo.json'
import { PhaseType, WeaponType } from '../data.d'

import './index.scss'

export default ({ phase }: { phase: PhaseType }) => {
  const endTime = moment(phase.EndDateTime + '+00:00')
  const startTime = moment(phase.StartDateTime + '+00:00')
  const { RareWeaponID, StageID, WeaponSets } = phase
  const RareWeaponName = weapons.find((item: WeaponType) => item.Id === RareWeaponID)?.Name
  // 只有存在绿问号的时候需要展示熊武器
  const isRareWeaponVisible = WeaponSets.includes(-1)
  const stageName = stages.find(item => item.Id === StageID)?.MapFileName
  const prefix = '/overfishing'

  return (
    <div className="card-box">
      <section className="time-box">
        <div>开始时间: {startTime.format('llll')}</div>
        <div>结束时间: {endTime.format('llll')}</div>
      </section>
      <div className="stage-box">
        <img src={`/overfishing/stages/${stageName}.png`} alt="stage" />
      </div>
      <div className="weapon-box">
        {WeaponSets.map((id, index) => (
          <img
            key={index}
            src={
              [-1, -2].includes(id)
                ? `/overfishing/weapons/questionmark${id === -2 ? '2' : ''}.png`
                : `/overfishing/weapons/Wst_${weapons.find((item: WeaponType) => item.Id === id)?.Name}.png`
            }
            alt="weapon"
          />
        ))}
        {isRareWeaponVisible && <img src={`/overfishing/weapons/Wst_${RareWeaponName}.png`} />}
      </div>
    </div>
  )
}
