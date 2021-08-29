import * as React from 'react'
import CheckboxGroup from '@/components/checkboxGroup'
import { CheckboxValueType } from '@/components/checkboxGroup'

import './index.scss'

export interface FilterOptions {
  label: string
  value: string | number
  checked?: boolean
}

export default ({
  options,
  setOptions
}: {
  options: Array<FilterOptions>
  setOptions: React.Dispatch<React.SetStateAction<FilterOptions[]>>
}) => {
  const handleChange = (value: CheckboxValueType[]) => {
    setOptions(
      options.map(option => {
        option.checked = value.includes(option.value)
        return option
      })
    )
  }
  return (
    <div className="filter-box">
      <section>
        <CheckboxGroup options={options} onChange={handleChange}></CheckboxGroup>
      </section>
    </div>
  )
}
