import React from 'react'
import PropTypes from 'prop-types'
import { StyledMenu, StyledMenuItem } from './styled'

const Menu = props => (
  <StyledMenu>
    {props.links.map(link => (
      <StyledMenuItem key={link.path} href={link.path}>
        {link.text}
      </StyledMenuItem>
    ))}
  </StyledMenu>
)

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
}

export default Menu
