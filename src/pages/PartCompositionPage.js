// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LabelInput from '../components/LabelInput'
import Button from '../components/Button'
import Stepper from '../components/Stepper'

import { currentPartsStore, currentPartCompositionsStore } from '../store'
import partsActions, { getParts } from '../store/parts'
import partCompositionsActions, { getPartCompositions, getTotalCompositions, getAnyCompositionsUnfilled } from '../store/part-compositions'
import { parseStringToNumber } from '../utils'

import type { Dispatch } from 'redux'
import type { State as ApplicationState } from '../store'
import type { PartHash } from '../store/part-compositions'

type Props = {
  parts: number,
  partCompositions: PartHash,
  totalCompositions: number,
  anyCompositionsUnfilled: boolean,
  dispatch: Dispatch<*>
}

class PartCompositionPage extends Component<Props> {
  updatePartCompositions (newValue, partId) {
    const { dispatch } = this.props
    const newPercentage = parseStringToNumber(newValue)
    dispatch(partCompositionsActions.savePartComposition(partId, newPercentage))
  }

  renderPartsList () {
    const { partCompositions } = this.props
    return Object.keys(partCompositions).map((partId, value) => {
      const partUpdater = (newValue) => this.updatePartCompositions(newValue, partId)
      return <LabelInput key={partId} label={`Part ${parseStringToNumber(partId) + 1} %`} onChange={partUpdater} />
    })
  }

  resetParts () {
    const { dispatch } = this.props
    dispatch(partCompositionsActions.resetPartCompositions())
    dispatch(partsActions.resetParts())
  }

  render () {
    const { totalCompositions, anyCompositionsUnfilled } = this.props
    const disableNext = totalCompositions !== 100 || anyCompositionsUnfilled
    return (
      <Wrapper>
        <Header>
          <Stepper steps={3} progress={2} />
        </Header>
        {this.renderPartsList()}
        <Footer>
          <Button purpose='secondary' to='/part-query'>Previous</Button>
          <Button purpose='primary' to='/done' disabled={disableNext} onClick={() => this.resetParts()}>Next</Button>
        </Footer>
      </Wrapper>
    )
  }
}

export default connect<Props, {}, _, _, ApplicationState, Dispatch<*>>(
  (state) => ({
    parts: getParts(currentPartsStore(state)),
    partCompositions: getPartCompositions(currentPartCompositionsStore(state)),
    totalCompositions: getTotalCompositions(currentPartCompositionsStore(state)),
    anyCompositionsUnfilled: getAnyCompositionsUnfilled(currentPartCompositionsStore(state))
  })
)(PartCompositionPage)
