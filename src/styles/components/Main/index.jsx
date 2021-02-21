import React from 'react'
import { StyledMain } from './styled'

const Main = props => <StyledMain data-testid="Main">{props.children}</StyledMain>

Main.propTypes = {}

export default Main
