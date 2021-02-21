import React from 'react'
import { render } from '@testing-library/react'
import Component from '.'

describe('Styles::Footer', () => {
  it('renders the component correctly', () => {
    const TestingComponent = (
      <Component>
        <h1>Test</h1>
      </Component>
    )
    const { getByTestId, getByText, asFragment } = render(TestingComponent)

    const Wrapper = getByTestId('Footer')
    Wrapper.computedStyle = window.getComputedStyle(Wrapper)

    const Children = getByText('Test')

    // Expectations
    expect(asFragment(TestingComponent)).toMatchSnapshot()
    expect(Wrapper.computedStyle.display).toBe('flex')
    expect(Wrapper.computedStyle.justifyContent).toBe('center')
    expect(Wrapper.computedStyle.position).toBe('absolute')
    expect(Wrapper.childNodes[0].isSameNode(Children)).toBeTruthy()
  })
})
