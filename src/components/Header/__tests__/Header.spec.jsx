import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Header from '..';
import CustomProvider from '../../../providers/Custom';
import { StyledSwitch } from '../Header.styles';

const WrappedHeader = () => (
  <CustomProvider>
    <Header />
  </CustomProvider>
);

describe('<Header />', () => {
  it('renders search bar', () => {
    render(<WrappedHeader />);

    expect(screen.getByLabelText('search')).toBeInTheDocument();
  });

  it('typing on search bar', () => {
    render(<WrappedHeader />);

    const searchElement = screen.getByLabelText('search');
    const value = 'wizeline';

    fireEvent.change(searchElement, { target: { value } });
    expect(searchElement.value).toBe(value);
  });

  it('submits text in search bar', () => {
    const mockedSubmit = jest.fn(() => {});

    render(<WrappedHeader />);

    const formElement = screen.getByLabelText('search form');
    const inputElement = formElement.querySelector('input');
    const value = 'dog';

    formElement.onsubmit = mockedSubmit;

    fireEvent.change(inputElement, { target: { value } });
    fireEvent.submit(formElement);

    expect(inputElement.value).toBe(value);
    expect(mockedSubmit).toHaveBeenCalled();
  });

  it('renders dark mode switch', () => {
    render(<WrappedHeader />);

    expect(screen.getByLabelText('dark mode switch')).toBeInTheDocument();
  });

  it('executes dark mode switch onChange event', () => {
    let checked = false;
    const handleOnChange = jest.fn(() => {
      checked = !checked;
    });
    const ariaLabel = 'mock switch';

    render(
      <StyledSwitch aria-label={ariaLabel} checked={checked} onChange={handleOnChange} />
    );

    const element = screen
      .getByLabelText(ariaLabel)
      .querySelector('input[type="checkbox"]');

    fireEvent.click(element);
    expect(handleOnChange).toHaveBeenCalled();
    expect(checked).toBeTruthy();
  });

  it('renders and match checked switch', () => {
    const tree = renderer.create(<StyledSwitch checked />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('shows account menu', () => {
    const renderRes = render(<WrappedHeader />);

    const element = renderRes.container.querySelector('button[aria-controls="menuId"]');

    fireEvent.click(element);

    expect(element.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByTestId('menu-testid')).toBeVisible();
  });
});
