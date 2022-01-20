import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Router from './Router';

describe('<Router />', () => {
  test('it should mount', () => {
    render(<Router />);
    
    const router = screen.getByTestId('Router');

    expect(router).toBeInTheDocument();
  });
});