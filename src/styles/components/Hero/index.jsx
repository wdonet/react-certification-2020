import React from 'react'
import PropTypes from 'prop-types'
import { StyledHero } from './styled'
import useGradient from '../../../hooks/useGradient'

const Hero = ({ backgroundColors, amountDisplay, animationSpeed, children }) => {
  const gradientStyle = useGradient({
    colors: backgroundColors,
    total: amountDisplay,
    speed: animationSpeed,
  })

  return (
    <StyledHero
      style={{
        ...gradientStyle,
      }}
    >
      {children}
    </StyledHero>
  )
}

Hero.propTypes = {
  backgroundColors: PropTypes.instanceOf(Array).isRequired,
  amountDisplay: PropTypes.number,
  animationSpeed: PropTypes.number,
  children: PropTypes.node,
}

Hero.defaultProps = {
  amountDisplay: 3,
  animationSpeed: 2000,
  children: undefined,
}

export default Hero
