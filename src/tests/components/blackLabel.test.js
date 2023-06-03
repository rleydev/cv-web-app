import React from 'react';
import { render, screen } from '@testing-library/react';
import BlackLabel from '../../components/BlackLabel/BlackLabel';

describe('BlackLabel', () => {
    it('renders the label text', () => {
      const labelText = 'Test Label';
      render(<BlackLabel text={labelText} />);
      const labelElement = screen.getByText(labelText);
      expect(labelElement).toBeInTheDocument();
    });
  
    it('renders with the correct class name', () => {
      const labelText = 'Test Label';
      render(<BlackLabel text={labelText} />);
      const labelElement = screen.getByText(labelText);
      expect(labelElement).toHaveClass('black-label');
    });
});