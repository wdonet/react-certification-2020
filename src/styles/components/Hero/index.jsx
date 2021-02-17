import React from 'react'
import { StyledHero } from './styled'
import useGradient from '../../../hooks/useGradient'
import useThemeStyles from '../../../hooks/useThemeStyles'

const Hero = () => {
  const { name, theme, setTheme } = useThemeStyles()

  const colors = useGradient({
    colors: [
      theme.decorator.primary,
      theme.decorator.secondary,
      theme.background.primary,
    ],
    total: 3,
    speed: 2000,
  })

  return (
    <StyledHero
      style={{
        ...colors.vars,
        transition: colors.transitions,
        background: colors.background,
      }}
    >
      <button type="button" onClick={() => setTheme(name === 'light' ? 'dark' : 'light')}>
        Change Theme to Light
      </button>
    </StyledHero>
  )
}

Hero.propTypes = {}

export default Hero
