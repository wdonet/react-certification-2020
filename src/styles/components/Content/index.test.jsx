import React from 'react'
import { render } from '@testing-library/react'
import Component from '.'

describe('Styles::Content', () => {
  it('renders the content correctly', () => {
    const TestingComponent = (
      <Component>
        <h1>Test</h1>
      </Component>
    )
    const { getByTestId, getByText, asFragment } = render(TestingComponent)

    const Wrapper = getByTestId('Content')
    Wrapper.computedStyle = window.getComputedStyle(Wrapper)

    const Children = getByText('Test')

    expect(asFragment(Wrapper)).toMatchSnapshot()
    expect(Wrapper.computedStyle.display).toBe('flex')
    expect(Wrapper.computedStyle.justifyContent).toBe('center')
    expect(Wrapper.computedStyle.justifyContent).toBe('center')
    expect(Wrapper.childNodes[0].isSameNode(Children)).toBeTruthy()
  })
})
