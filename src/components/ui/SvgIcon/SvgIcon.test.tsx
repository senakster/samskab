import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SvgIcon from './SvgIcon';

describe('<SvgIcon />', () => {
  test('it should mount', () => {
    render(<SvgIcon id="1" width="100" height="100"/>);
    
    const svgIcon = screen.getByTestId('SvgIcon');

    expect(svgIcon).toBeInTheDocument();
  });
});