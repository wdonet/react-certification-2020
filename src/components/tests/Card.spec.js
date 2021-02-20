import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

const cardProps = {
  title: 'Wizeline',
  imageURL: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
  description: 'description',
  publishedDate: '2019-09-30T23:54:32Z',
};

describe('Card component', () => {
  it('should render a card', () => {
    render(<Card {...cardProps} />);
    expect(screen.getByTestId('card-wrapper')).toHaveClass('card');
  });

  it('should render a header', () => {
    render(<Card {...cardProps} />);
    const headersList = screen.getByTestId('card-wrapper').querySelectorAll('.header');
    const [header] = headersList;

    expect(headersList).toHaveLength(1);
    expect(header).toHaveClass('header');
    expect(header).toHaveTextContent(cardProps.title);
  });

  it('should render a description', () => {
    render(<Card {...cardProps} />);
    const descriptionsList = screen.getByTestId('card-wrapper').querySelectorAll('.description');
    const [description] = descriptionsList;

    expect(descriptionsList).toHaveLength(1);
    expect(description).toHaveClass('description');
    expect(description).toHaveTextContent(cardProps.description);
  });

  it('should render an image', () => {
    render(<Card {...cardProps} />);
    const imagesList = screen.getByTestId('card-wrapper').querySelectorAll('.image');
    const [image] = imagesList;

    expect(imagesList).toHaveLength(1);
    expect(image).toHaveClass('image');
    expect(image.firstChild).toHaveStyle(`background-image: url(${cardProps.imageURL})`);
  });

  it('should render a date', () => {
    render(<Card {...cardProps} />);
    const publishedDatesList = screen.getByTestId('card-wrapper').querySelectorAll('.published-date');
    const [publishedDate] = publishedDatesList;

    expect(publishedDatesList).toHaveLength(1);
    expect(publishedDate).toHaveClass('published-date');
    expect(publishedDate).toHaveTextContent(cardProps.publishedDate);
  });
});
