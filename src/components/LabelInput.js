// @flow
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  label: string,
  onChange: (newValue: string) => void
}

const Label = styled.label`
  font-size: 2em;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  height: 1em;
  width: 15em;
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 0px;
  outline: none;
`

export default ({ label, onChange }: Props) => {
  const [value, setValue] = useState('')

  const updateInput = (event: SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newValue = event.target.value
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <Label>
      {label}
      <Input type='text' value={value} onChange={updateInput} />
    </Label>
  )
}
