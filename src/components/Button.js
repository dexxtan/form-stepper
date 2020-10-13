// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import type { Node } from 'react'

type Props = {
  className?: string,
  purpose: string,
  href?: string,
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

const StyledButton = styled.button`
  display: inline-block;
  font-size: 2em;
  padding: 0.5em 2em;
  border: 0px;
  border-radius: 0px;
  color: ${white};
  background: ${determineBackground};
  text-decoration: none;
`

export default class Button extends PureComponent<Props> {
  render () {
    const { className, purpose, href, children } = this.props
    return (
      <StyledButton className={className} purpose={purpose} as='a' href={href}>
        {children}
      </StyledButton>
    )
  }
}
