import React from 'react'
import { render } from '@testing-library/react'
import Component from '.'

describe('Styles::Header', () => {
  it('renders the component correctly', () => {
    const TestingComponent = (
      <Component
        main={<h1>Main</h1>}
        secondary={<div>Secondary</div>}
        corner={<div>Corner</div>}
      />
    )
    const { getByTestId, getByText, asFragment } = render(TestingComponent)

    const Wrapper = getByTestId('Header')
    Wrapper.computedStyle = window.getComputedStyle(Wrapper)

    const MainSection = getByText('Main')
    const SecondarySection = getByText('Secondary')
    const CornerSection = getByText('Corner')

    // Expectations
    expect(asFragment(TestingComponent)).toMatchSnapshot()
    expect(Wrapper.computedStyle.display).toBe('flex')
    expect(Wrapper.childNodes[0].childNodes[0].isSameNode(MainSection)).toBeTruthy()
    expect(Wrapper.childNodes[1].childNodes[0].isSameNode(SecondarySection)).toBeTruthy()
    expect(Wrapper.childNodes[2].childNodes[0].isSameNode(CornerSection)).toBeTruthy()
  })
})
