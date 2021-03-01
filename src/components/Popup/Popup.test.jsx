import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import Popup from './Popup.component';

describe('Popup Component', () => {
  it('Popup should be hidden as initial state', () => {
    const { container } = render(<Popup onClose={() => {}} />);
    const popup = queryByTestId(container, 'popup');

    expect(popup).toBeNull();
  });

  it('Popup should be visible as initial state', () => {
    const { container } = render(<Popup visible onClose={() => {}} />);
    const popup = queryByTestId(container, 'popup');

    expect(popup).toBeInTheDocument();
  });

  it('Should render children', () => {
    render(
      <Popup visible onClose={() => {}}>
        Test
      </Popup>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('Should close popup after click in backdrop area', () => {
    let isVisible = true;
    const onCloseCallback = (value) => {
      isVisible = value;
    };
    const { container } = render(
      <Popup visible={isVisible} onClose={onCloseCallback}>
        Test
      </Popup>
    );
    const popup = queryByTestId(container, 'popup');
    const backdrop = queryByTestId(container, 'backdrop');

    expect(popup).toBeInTheDocument();
    fireEvent.click(backdrop);
    expect(isVisible).toBe(false);
  });
});
