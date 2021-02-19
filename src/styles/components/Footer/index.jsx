import React from 'react'
import PropTypes from 'prop-types'
import { StyledFooter } from './styled'

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
