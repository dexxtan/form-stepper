// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Wrapper from '../components/Wrapper'
import Footer from '../components/Footer'
import LabelInput from '../components/LabelInput'
import Button from '../components/Button'

import { currentPartsStore } from '../store'
import partsActions, { getParts } from '../store/parts'
import partCompositionsActions from '../store/part-compositions'
import { parseStringToNumber } from '../utils'

import type { Dispatch } from 'redux'
import type { State as ApplicationState } from '../store'

type Props = {
  parts: number,
  dispatch: Dispatch<*>
}

class PartQueryPage extends Component<Props> {
  updateNumberOfParts (newValue: string) {
    const { dispatch } = this.props
    const numParts = parseStringToNumber(newValue)

    dispatch(partsActions.saveParts(numParts))
  }

  createCompositions () {
    const { parts, dispatch } = this.props

    dispatch(partCompositionsActions.createPartCompositions(parts))
  }

  render () {
    const { parts } = this.props
    const disableNext = parts < 1
    return (
      <Wrapper>
        <LabelInput label='Number of parts:' onChange={(newValue: string) => this.updateNumberOfParts(newValue)} />
        <Footer>
          <Button purpose='secondary' to='/'>Previous</Button>
          <Button purpose='primary' to='/part-composition' disabled={disableNext} onClick={() => this.createCompositions()}>Next</Button>
        </Footer>
      </Wrapper>
    )
  }
}

export default connect<Props, {}, _, _, ApplicationState, Dispatch<*>>(
  (state) => ({
    parts: getParts(currentPartsStore(state))
  })
)(PartQueryPage)
