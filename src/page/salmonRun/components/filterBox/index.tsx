import * as React from 'react'
import CheckboxGroup from '@/components/checkboxGroup'
import { CheckboxOptionType } from '@/components/checkboxGroup'

export default () => {
  const options = [
    {
      label: '破船',
      value: 1
    },
    {
      label: '破坝',
      value: 2
    }
  ]
  return (
    <div className="filter-box">
      <CheckboxGroup options={options} onChange={() => {}}></CheckboxGroup>
    </div>
  )
}
