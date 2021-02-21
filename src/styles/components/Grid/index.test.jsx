import React from 'react'
import { render } from '@testing-library/react'
import Component from '.'

describe('Styles::Grid', () => {
  it('renders the component correctly', () => {
    const TestingComponent = (
      <Component>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Component>
    )
    const { getByTestId, getByText, asFragment } = render(TestingComponent)

    const Wrapper = getByTestId('Grid')
    Wrapper.computedStyle = window.getComputedStyle(Wrapper)

    const Item2 = getByText('Item 2')

    // Expectations
    expect(asFragment(TestingComponent)).toMatchSnapshot()
    expect(Wrapper.computedStyle.display).toBe('grid')
    expect(Wrapper.computedStyle.gridTemplateColumns).toBe(
      'repeat(auto-fill,minmax(300px,1fr))'
    )
    // is there a best way to compare nodes
    expect(Wrapper.childNodes[1].isSameNode(Item2)).toBeTruthy()
  })
})
