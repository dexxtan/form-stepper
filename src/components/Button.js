// @flow
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import type { Node } from 'react'

type Props = {
  className?: string,
  purpose: string,
  to?: string,
  disabled?: boolean,
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

const determineDisabled = (props: Props): string => {
  return props.disabled === true ? 'none' : 'auto'
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
  pointer-events: ${determineDisabled};
`

export default class Button extends PureComponent<Props> {
  render () {
    const { className, purpose, to, disabled, children } = this.props
    return (
      <StyledButton className={className} purpose={purpose} as={Link} to={to} disabled={disabled}>
        {children}
      </StyledButton>
    )
  }
}
