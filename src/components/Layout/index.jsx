import React from 'react'
import { StyledLayout } from './styled'
import useThemeStyles from '../../hooks/useThemeStyles'
import useCustom from '../../hooks/useCustom'
import Header from '../../styles/components/Header'
import Main from '../../styles/components/Main'
import Content from '../../styles/components/Content'
import Menu from '../../styles/components/Menu'
import Hero from '../../styles/components/Hero'
import Footer from '../../styles/components/Footer'
import Grid from '../../styles/components/Grid'
import Tile from '../../styles/components/Tile'
import Icon from '../../styles/components/Icon'
import InputSearch from '../../styles/components/InputSearch'
import Image from '../../styles/components/Image'
import logoImage from '../../assets/images/logo.png'
import videosJSON from '../../data/videos.json'

const Layout = () => {
  const { name, theme, setTheme } = useThemeStyles()
  const { increaseThemeClicks, triggered } = useCustom()
  const links = [
    { path: '/', text: 'Home' },
    { path: '/favorites', text: 'Favorites' },
  ]

  console.log(triggered)

  const HeaderLogo = <Image src={logoImage} />
  const HeaderNavigatin = <Menu links={links} />
  const HeaderCorner = (
    <Icon
      size="100%"
      icon={theme.icon}
      onClick={() => {
        new Audio(theme.sound).play()
        increaseThemeClicks()
      }}
      onAnimate={() => {
        setTheme(name === 'light' ? 'dark' : 'light')
      }}
    />
  )

  let heroDisplayColorsAmount = 3
  let heroDisplaySpeed = 2000
  let heroColors = [
    theme.decorator.primary,
    theme.decorator.secondary,
    theme.background.primary,
  ]
  if (triggered.rainbow) {
    heroDisplayColorsAmount = triggered.rainbow.values.colors.length
    heroColors = triggered.rainbow.values.colors
    heroDisplaySpeed = 1000
  }

  // TODO: move this to other smart components following Single Responsability Principle, not able to do this because of timing issues, sorry.
  return (
    <StyledLayout>
      <Header main={HeaderLogo} secondary={HeaderNavigatin} corner={HeaderCorner} />
      <Main>
        <Hero
          backgroundColors={heroColors}
          amountDisplay={heroDisplayColorsAmount}
          animationSpeed={heroDisplaySpeed}
        >
          <InputSearch />
        </Hero>
        <Content>
          <Grid>
            {videosJSON.items.map(video => (
              <Tile src={video.snippet.thumbnails.medium.url} />
            ))}
          </Grid>
        </Content>
      </Main>
      <Footer>Thanks for visiting!</Footer>
    </StyledLayout>
  )
}

Layout.propTypes = {}

export default Layout
