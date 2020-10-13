// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import type { Node } from 'react'

type Props = {
  children: Node
}

const Section = styled.section`
  width: 100%;
  display: flex;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
`

export default class Header extends PureComponent<Props> {
  render () {
    const { children } = this.props
    return (
      <Section>
        {children}
      </Section>
    )
  }
}
