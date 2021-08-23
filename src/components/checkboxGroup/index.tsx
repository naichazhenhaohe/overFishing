import * as React from 'react'

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
}

export default ({
  options,
  onChange
}: {
  options: Array<CheckboxOptionType>
  onChange: (e: CheckboxChangeEvent) => void
}) => {
  const handleChange = () => {
    console.log('aaa')
  }
  return (
    <div className="checkbox-group-box">
      {options.map(option => (
        <label>
          <input type="checkbox" value={option.value} disabled={option.disabled} onChange={handleChange} />
          {option.label}
        </label>
      ))}
    </div>
  )
}
