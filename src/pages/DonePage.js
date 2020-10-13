// @flow
import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Stepper from '../components/Stepper'

import colours from '../utils/colours'

const { formBlue } = colours

const StyledHero = styled.h1`
  margin: 0.5em;
  font-size: 8em;
  font-weight: normal;
  color: ${formBlue};
`

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const HomePage = () => (
  <Wrapper>
    <Header>
      <Stepper steps={3} progress={3} />
    </Header>
    <Content>
      <StyledHero>Success!</StyledHero>
      <Button purpose='secondary' to='/'>Home</Button>
    </Content>
    <Footer />
  </Wrapper>
)

export default HomePage
