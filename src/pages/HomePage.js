// @flow
import React from 'react'

import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

export const HomePage = () => (
  <Wrapper>
    <Header />
    <Button purpose='primary' to='/part-query'>New Request</Button>
    <Footer />
  </Wrapper>
)

export default HomePage
