import React from 'react'
import { StyledContent } from './styled'

const Content = props => (
  <StyledContent data-testid="Content">{props.children}</StyledContent>
)

Content.propTypes = {}

export default Content
