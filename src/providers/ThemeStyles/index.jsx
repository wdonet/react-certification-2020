import React from 'react'
import PropTypes from 'prop-types'
import BaselineStyle from '../../styles/global/Baseline'
import LayoutStyle from '../../styles/global/Layout'
import ThemeStyle from '../../styles/global/Theme'
import themes from '../../config/themes'

export const ThemeStylesContext = React.createContext({})

const ThemeStylesProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState('dark')
  const themeValues = themes[currentTheme]

  function setTheme(newTheme) {
    const validThemes = ['dark', 'light']
    if (validThemes.includes(newTheme)) {
      setCurrentTheme(newTheme)
    } else {
      setCurrentTheme('light')
    }
  }

  function getThemes() {
    return Object.keys(themes)
  }

  const contextValue = {
    name: currentTheme,
    theme: themeValues,
    getThemes,
    setTheme,
  }

  return (
    <ThemeStylesContext.Provider value={contextValue}>
      <ThemeStyle theme={themeValues} />
      <LayoutStyle theme={themeValues} />
      <BaselineStyle theme={themeValues} />
      {children}
    </ThemeStylesContext.Provider>
  )
}

ThemeStylesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeStylesProvider
