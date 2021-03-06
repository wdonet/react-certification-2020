import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageButton from '.';

const className = 'test-class';
const blurImage = 'images/menu.svg';
const focusImage = 'images/menu-focus.svg';
const clickHandler = jest.fn(() => {});
const alt = 'Loggin';

test('Renders with styling', () => {
  const { getByAltText } = render(
    <ImageButton
      className={className}
      blurImage={blurImage}
      focusImage={focusImage}
      clickHandler={clickHandler}
      alt={alt}
    />
  );

  const button = getByAltText(alt);
  expect(button).toHaveClass(className);
});

test('Image changes on mouseover', () => {
  const { getByAltText } = render(
    <ImageButton
      className={className}
      blurImage={blurImage}
      focusImage={focusImage}
      clickHandler={clickHandler}
      alt={alt}
    />
  );

  const button = getByAltText(alt);
  expect(button).toHaveAttribute('src', blurImage);
  fireEvent.mouseEnter(button);
  expect(button).toHaveAttribute('src', focusImage);
  fireEvent.mouseLeave(button);
  expect(button).toHaveAttribute('src', blurImage);
});

test('Action on click', () => {
  const { getByAltText } = render(
    <ImageButton
      className={className}
      blurImage={blurImage}
      focusImage={focusImage}
      clickHandler={clickHandler}
      alt={alt}
    />
  );

  const button = getByAltText(alt);
  fireEvent.click(button);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
