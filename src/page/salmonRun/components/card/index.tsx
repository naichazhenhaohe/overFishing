import * as React from 'react'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import weapons from '@/utils/WeaponInfo_Main.json'
import clothes from '@/utils/GearInfo_Clothes.json'
import head from '@/utils/GearInfo_Head.json'
import shoes from '@/utils/GearInfo_Shoes.json'
import stages from '@/utils/MapInfo.json'

import { getFormatTime } from '@/utils/util'

import './index.scss'

dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
export interface PhaseType {
  EndDateTime: string
  RareWeaponID: number
  StageID: number
  StartDateTime: string
  WeaponSets: number[]
  GearID?: number
  GearKind?: string
}

export default ({ phase, isLatestIssue }: { phase: PhaseType; isLatestIssue: boolean }) => {
  const endTime = phase.EndDateTime
  const startTime = phase.StartDateTime

  const { RareWeaponID, StageID, WeaponSets, GearID, GearKind } = phase
  const RareWeaponName = weapons.find(item => item.Id === RareWeaponID)?.Name
  // 只有存在绿问号的时候需要展示熊武器
  const isRareWeaponVisible = WeaponSets.includes(-1)
  const stageName = stages.find(item => item.Id === StageID)?.MapFileName

  const gearInfo = GearKind === 'cClothes' ? clothes : GearKind === 'cHead' ? head : shoes
  const gearModelName = gearInfo.find(gear => gear.Id === GearID)?.ModelName

  return (
    <div className="card-box">
      <section className="time-box">
        <div>{`${getFormatTime(startTime)} => ${getFormatTime(endTime)}`}</div>
      </section>
      <section className="detail-box">
        <div className="stage-box">
          <img draggable="false" src={`/overfishing/stages/${stageName}.png`} alt="stage" />
        </div>
        <div className="weapon-box">
          {WeaponSets.map((id, index) => (
            <span key={index}>
              <img
                draggable="false"
                src={
                  [-1, -2].includes(id)
                    ? `/overfishing/weapons/questionmark${id === -2 ? '2' : ''}.png`
                    : `/overfishing/weapons/Wst_${weapons.find(item => item.Id === id)?.Name}.png`
                }
                alt="weapon"
              />
            </span>
          ))}
          {isRareWeaponVisible && <img src={`/overfishing/weapons/Wst_${RareWeaponName}.png`} />}
        </div>
        <div className="reward-box">
          <img draggable="false" src={`/overfishing/gears/${gearModelName}.png`} />
        </div>
      </section>
    </div>
  )
}
