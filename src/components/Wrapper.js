// @flow
import React from 'react'
import styled from 'styled-components'

import type { Node } from 'react'

type Props = {
  children: Node
}

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 16px); // body margins are 8px, to find a way to modify body css
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default ({ children }: Props) => (
  <Section>
    {children}
  </Section>
)
