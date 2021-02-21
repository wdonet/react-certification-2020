import React from 'react'
import PropTypes from 'prop-types'
import { StyledSVG } from './styled'

const Sun = props => (
  <StyledSVG
    height="512px"
    id="sun"
    version="1.1"
    viewBox="0 0 512 512"
    width="512px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        id="sun-circle"
        d="M255.01,155.138c-54.847,0-99.317,44.47-99.317,99.309c0,54.854,44.47,99.325,99.317,99.325   c54.847,0,99.309-44.471,99.309-99.325C354.318,199.607,309.856,155.138,255.01,155.138z M255.01,327.506   c-40.348,0-73.052-32.704-73.052-73.06c0-40.339,32.704-73.048,73.052-73.048c40.347,0,73.06,32.709,73.06,73.048   C328.069,294.802,295.356,327.506,255.01,327.506z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M256.715,138.066c0,0-43.257-81.756,0-81.756C299.98,56.31,256.715,138.066,256.715,138.066z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M340.27,173.651c0,0,27.219-88.392,57.799-57.791C428.648,146.437,340.27,173.651,340.27,173.651z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M374.187,257.912c0,0,81.747-43.274,81.731,0C455.9,301.156,374.187,257.912,374.187,257.912z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M338.58,341.479c0,0,88.421,27.186,57.799,57.782C365.799,429.833,338.58,341.479,338.58,341.479z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M254.332,375.379c0,0,43.291,81.739,0,81.739C211.083,457.085,254.332,375.379,254.332,375.379z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M170.778,339.772c0,0-27.194,88.404-57.799,57.8C82.416,366.983,170.778,339.772,170.778,339.772z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M136.87,255.508c0,0-81.74,43.291-81.74,0C55.147,212.28,136.87,255.508,136.87,255.508z"
        fill={props.fill}
      />
      <path
        className="sun-ray"
        d="M172.476,171.954c0,0-88.404-27.182-57.799-57.799C145.249,83.604,172.476,171.954,172.476,171.954z"
        fill={props.fill}
      />
    </g>
  </StyledSVG>
)

Sun.propTypes = {
  fill: PropTypes.string,
}

Sun.defaultProps = {
  fill: '#000',
}

export default Sun
