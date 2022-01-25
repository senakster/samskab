import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LayoutToggle from './LayoutToggle';

describe('<LayoutToggle />', () => {
  test('it should mount', () => {
    render(<LayoutToggle />);
    
    const layoutToggle = screen.getByTestId('LayoutToggle');

    expect(layoutToggle).toBeInTheDocument();
  });
});