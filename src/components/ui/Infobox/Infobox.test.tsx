import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Infobox from './Infobox';

describe('<Infobox />', () => {
  test('it should mount', () => {
    render(<Infobox />);
    
    const infobox = screen.getByTestId('Infobox');

    expect(infobox).toBeInTheDocument();
  });
});