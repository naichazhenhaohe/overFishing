import * as React from 'react'
import checked from '@/asset/checked.png'
import unchecked from '@/asset/unchecked.png'

import './index.scss'

export type CheckboxValueType = string | number | readonly string[] | undefined

export interface CheckboxChangeEvent {
  target: any
  stopPropagation: () => void
  preventDefault: () => void
  nativeEvent: MouseEvent
}

export interface CheckboxOptionType {
  label: React.ReactNode
  value: CheckboxValueType
  disabled?: boolean
  checked?: boolean
}

export default ({
  options,
  onChange
}: {
  options: Array<CheckboxOptionType>
  onChange: (e: Array<CheckboxValueType>) => void
}) => {
  const [optionsWithStatus, setOptionsWithStatus] = React.useState(
    options.map(item => {
      return { ...item, checked: item.checked ? true : false }
    })
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedOptions = optionsWithStatus.map(item => {
      if (item.value + '' === e.target.value) {
        item.checked = e.target.checked
      }
      return item
    })

    setOptionsWithStatus(changedOptions)
    onChange(changedOptions.filter(item => item.checked).map(item => item.value))
  }

  return (
    <div className="checkbox-group-box">
      {optionsWithStatus.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option.value}
            disabled={option.disabled}
            onChange={handleChange}
            checked={option.checked}
          />
          <img src={option.checked ? checked : unchecked} alt="check salmon" />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}
