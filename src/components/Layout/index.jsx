import React from 'react'
import PropTypes from 'prop-types'
import { StyledLayout } from './styled'
import Header from '../../styles/components/Header'
import Content from '../../styles/components/Content'
import Hero from '../../styles/components/Hero'
import Footer from '../../styles/components/Footer'

const Layout = props => (
  <StyledLayout>
    <Header />
    <Content>
      <Hero>
        <p>{props.children}</p>
      </Hero>
    </Content>
    <Footer>
      <a href="/">this is a link</a>
      <span>this is a text</span>
    </Footer>
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
