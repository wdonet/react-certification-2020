import React from 'react'
import PropTypes from 'prop-types'
import { StyledSVG } from './styled'

const Moon = props => (
  <StyledSVG
    height="512px"
    id="moon"
    version="1.1"
    viewBox="0 0 512 512"
    width="512px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M309.611,367.63c-91.043,0-164.835-73.801-164.835-164.863c0-62.778,35.49-116.695,87.115-144.532   C133.998,70.628,58.232,154.041,58.232,255.311c0,109.803,89.024,198.863,198.85,198.863c101.26,0,184.669-75.793,197.08-173.678   C426.316,332.149,372.376,367.63,309.611,367.63z"
        fill={props.fill}
      />
      <polygon
        fill={props.fill}
        points="329.925,302.533 364.806,284.185 399.688,302.533 393.021,263.691 421.227,236.196 382.242,230.53    364.806,195.197 347.36,230.53 308.386,236.196 336.591,263.691  "
      />
    </g>
  </StyledSVG>
)

Moon.propTypes = {
  fill: PropTypes.string,
}

Moon.defaultProps = {
  fill: '#FFF',
}

export default Moon
