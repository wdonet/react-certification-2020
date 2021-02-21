import React from 'react'
import { render } from '@testing-library/react'
import Component from '.'

describe('Styles::Main', () => {
  it('renders the component correctly', () => {
    const TestingComponent = (
      <Component>
        <h1>Test</h1>
      </Component>
    )
    const { getByTestId, getByText, asFragment } = render(TestingComponent)

    const Wrapper = getByTestId('Main')
    Wrapper.computedStyle = window.getComputedStyle(Wrapper)

    const Children = getByText('Test')

    // Expectations
    expect(asFragment(TestingComponent)).toMatchSnapshot()
    expect(Wrapper.computedStyle.display).toBe('block')
    // is there a best way to compare nodes
    expect(Wrapper.childNodes[0].isSameNode(Children)).toBeTruthy()
  })
})
