import React, { useState } from 'react'
import PropTypes from 'prop-types'
import customs from '../../config/customs'

export const CustomContext = React.createContext({})

const CustomProvider = ({ children }) => {
  const [triggered, setTriggered] = useState({})
  const [themeClicks, setThemeClicks] = useState(0)

  if (themeClicks >= 10) {
    setTriggered({
      ...triggered,
      rainbow: {
        values: customs.rainbow,
        activated: true,
      },
    })
    setThemeClicks(0)
  }

  const increaseThemeClicks = () => {
    setThemeClicks(themeClicks + 1)
  }

  const contextValue = {
    triggered,
    increaseThemeClicks,
  }

  return <CustomContext.Provider value={contextValue}>{children}</CustomContext.Provider>
}

CustomProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CustomProvider
