// @flow
import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import type { Node } from 'react'

type Props = {
  className?: string,
  purpose: string,
  to: string,
  disabled?: boolean,
  onClick?: Function,
  children: Node
}

const formBlue = '#2A44D4'
const black = '#000000'
const white = '#FFFFFF'

const determineBackground = (props: Props): string => {
  switch (props.purpose) {
    case 'primary':
      return formBlue
    case 'secondary':
    default:
      return black
  }
}

const determinePointerEvents = (props: Props): string => {
  return props.disabled === true ? 'none' : 'auto'
}

const determineCursor = (props: Props): string => {
  return props.disabled === true ? 'auto' : 'pointer'
}

const StyledButton = styled.button`
  display: inline-block;
  font-size: 2em;
  padding: 0.5em 2em;
  margin: 0.5em;
  min-width: 7.5em;
  border: 0px;
  border-radius: 0px;
  color: ${white};
  background: ${determineBackground};
  text-decoration: none;
  text-align: center;
  pointer-events: ${determinePointerEvents};
  cursor: ${determineCursor}
`

export default ({ className, purpose, to, disabled, onClick, children }: Props) => {
  const history = useHistory()

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    history.push(to)
  }

  return (
    <StyledButton className={className} purpose={purpose} as='button' onClick={handleClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
