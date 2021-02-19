import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledImage } from './styled'

const Image = ({ src, size }) => (
  <StyledWrapper>
    <StyledImage size={size} src={src} />
  </StyledWrapper>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Image.defaultProps = {
  size: undefined,
}

export default Image
