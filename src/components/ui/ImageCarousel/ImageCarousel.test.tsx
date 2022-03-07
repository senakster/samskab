import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageCarousel from './ImageCarousel';

describe('<ImageCarousel />', () => {
  test('it should mount', () => {
    render(<ImageCarousel images={[]} />);
    
    const imageCarousel = screen.getByTestId('ImageCarousel');

    expect(imageCarousel).toBeInTheDocument();
  });
});