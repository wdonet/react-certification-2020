import React from 'react'
import { ThemeStylesContext } from '../providers/ThemeStyles'

const useTheme = () => {
  const contextValue = React.useContext(ThemeStylesContext)
  if (!contextValue) {
    throw Error(
      'Theme Styles Context not found; wrap your App with <ThemeStylesProvider>'
    )
  }
  return contextValue
}

export default useTheme
