// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { generateArray } from '../utils'
import colours from '../utils/colours'

import type { Node } from 'react'

type Props = {
  steps: number,
  progress: number,
  children?: Node
}

const { formBlue, white } = colours

const StepBubble = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${white};
  font-size: 4em;
  font-family: sans-serif;
  background-color: ${formBlue};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  padding: 0.5em;
  margin: 0 1.5em;
  border-radius: 50%;
  width: 1em;
  height: 1em;

  &::before {
    position: absolute;
    content: ' ';
    background: ${formBlue};
    opacity: ${props => props.disabled ? '0.5' : '1'};
    width: 3em;
    height: 0.1em;
    right: 2em;
    z-index: -1;
  }

  &:first-child::before {
    display: none;
  }
`

const Section = styled.section`
  width: 100%;
  display: flex;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
`


export default class Wrapper extends PureComponent<Props> {
  render () {
    const { steps, progress, children } = this.props
    return (
      <Section>
        {generateArray(steps).map(num => <StepBubble key={num} disabled={num > (progress - 1)}>{(num + 1 )}</StepBubble>)}
      </Section>
    )
  }
}
