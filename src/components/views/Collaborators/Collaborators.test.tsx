import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Collaborators from './Collaborators';

describe('<Collaborators />', () => {
  test('it should mount', () => {
    render(<Collaborators />);
    
    const collaborators = screen.getByTestId('Collaborators');

    expect(collaborators).toBeInTheDocument();
  });
});