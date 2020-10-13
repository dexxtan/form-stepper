// @flow
import React from 'react'

import Wrapper from '../components/Wrapper'
import Button from '../components/Button'

export const HomePage = () => (
  <Wrapper>
    <Button purpose='primary' to='/part-query'>New Request</Button>
  </Wrapper>
)

export default HomePage
