import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Icons from '../../icons'
import { StyledWrapper } from './styled'

const Icon = ({ icon, onAnimate, onClick }) => {
  const [startAnimation, setStartanimation] = useState(false)
  const handleClick = () => {
    if (onClick) {
      onClick()
      setStartanimation(true)
    }

    setTimeout(() => {
      if (onAnimate) {
        onAnimate()
      }
    }, 1000)
  }

  useEffect(() => {
    setStartanimation(false)
  }, [icon])

  const CustomIcon = Icons[icon]

  return (
    <StyledWrapper onClick={handleClick} animate={startAnimation}>
      <CustomIcon height="50px" width="50px" />
    </StyledWrapper>
  )
}

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onAnimate: PropTypes.func,
}

Icon.defaultProps = {
  onClick: undefined,
  onAnimate: undefined,
}

export default Icon
