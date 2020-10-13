// @flow
import React from 'react'
import styled from 'styled-components'

import type { Node } from 'react'

type Props = {
  children?: Node
}

const Section = styled.section`
  width: 100%;
  display: flex;
  font-family: sans-serif;
  justify-content: flex-end;
  align-items: center;
`

export default ({ children }: Props) => (
  <Section>
    {children}
  </Section>
)
