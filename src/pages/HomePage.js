// @flow
import React from 'react'

import Wrapper from '../components/Wrapper'
import Button from '../components/Button'

export const HomePage = () => (
  <Wrapper>
    <Button purpose='primary' to='/page1'>New Request</Button>
  </Wrapper>
)

export default HomePage
