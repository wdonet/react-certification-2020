import React from 'react'
import PropTypes from 'prop-types'
import { StyledLayout } from './styled'
import Header from '../../styles/components/Header'
import Content from '../../styles/components/Content'
import Footer from '../../styles/components/Footer'

const Layout = props => {
  console.log(props)
  return (
    <StyledLayout>
      <Header />
      <Content>
        <p>{props.children}</p>
      </Content>
      <Footer>
        <a href="/">this is a link</a>
        <span>this is a text</span>
      </Footer>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
